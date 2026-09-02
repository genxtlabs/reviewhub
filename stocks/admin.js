const token = localStorage.getItem('stockpulse_admin_token');
if (!token) location.href = 'admin-login.html';

async function adminFetch(path, options = {}) {
  const res = await fetch(`${STOCKS_API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });
  if (res.status === 401) {
    localStorage.removeItem('stockpulse_admin_token');
    location.href = 'admin-login.html';
    throw new Error('Unauthorized');
  }
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('stockpulse_admin_token');
  location.href = 'admin-login.html';
});

function fmtINR(value) {
  if (value == null) return '—';
  return `₹${Number(value).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
}
function fmtDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}
function fmtDateOnly(dateStr) {
  if (!dateStr) return '';
  return new Date(`${dateStr}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

// --- Tabs ---
document.querySelectorAll('.chip[data-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.chip[data-tab]').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    ['review', 'stocks', 'journal', 'logs'].forEach((name) => {
      document.getElementById(`tab-${name}`).hidden = name !== tab.dataset.tab;
    });
    if (tab.dataset.tab === 'stocks') loadStocks();
    if (tab.dataset.tab === 'journal') loadJournal();
    if (tab.dataset.tab === 'logs') loadLogs();
  });
});

// --- Review queue ---
async function loadReviewQueue() {
  const el = document.getElementById('tab-review');
  el.innerHTML = `<div class="empty-state">Loading&hellip;</div>`;
  try {
    const digests = await adminFetch('/api/admin/digests/pending');
    if (!digests.length) {
      el.innerHTML = `<div class="empty-state">Nothing pending — the queue is clear.</div>`;
      return;
    }
    el.innerHTML = digests.map((d) => {
      const s = d.summary_json || {};
      return `
        <div class="card-box digest-review-card" data-id="${d.id}">
          <div class="digest-review-meta">${d.stock_name} (${d.ticker}) &middot; verdict: ${d.evaluator_verdict} &middot; ${d.iterations} iteration(s)</div>
          <div class="digest-review-title">${s.title || '(no title)'}</div>
          ${s.priceContext ? `<div class="digest-review-context">${s.priceContext}</div>` : ''}
          <ul class="digest-review-points">${(s.keyPoints || []).map((p) => `<li>${p}</li>`).join('')}</ul>
          <div class="digest-review-takeaway">${s.takeaway || ''}</div>
          <details>
            <summary>Edit JSON before approving</summary>
            <textarea class="textarea edit-json">${JSON.stringify(s, null, 2)}</textarea>
          </details>
          <details>
            <summary>View source research notes</summary>
            <pre>${(d.research_notes || '').slice(0, 3000)}</pre>
          </details>
          <div class="row-actions" style="margin-top:14px;">
            <button class="btn btn-primary btn-sm" data-action="approve">Approve &amp; publish</button>
            <button class="btn btn-danger btn-sm" data-action="reject">Reject</button>
          </div>
        </div>`;
    }).join('');

    el.querySelectorAll('.digest-review-card').forEach((card) => {
      const id = card.dataset.id;
      card.querySelector('[data-action="approve"]').addEventListener('click', async () => {
        const textarea = card.querySelector('.edit-json');
        let editedSummary;
        try {
          editedSummary = JSON.parse(textarea.value);
        } catch {
          alert('Edited JSON is invalid — fix it or leave it unchanged before approving.');
          return;
        }
        await adminFetch(`/api/admin/digests/${id}/approve`, { method: 'POST', body: JSON.stringify({ editedSummary }) });
        loadReviewQueue();
      });
      card.querySelector('[data-action="reject"]').addEventListener('click', async () => {
        await adminFetch(`/api/admin/digests/${id}/reject`, { method: 'POST' });
        loadReviewQueue();
      });
    });
  } catch {
    el.innerHTML = `<div class="empty-state">Couldn't load the review queue.</div>`;
  }
}

// --- Stocks ---
async function loadStocks() {
  const el = document.getElementById('tab-stocks');
  el.innerHTML = `
    <form id="add-stock-form" class="add-stock-row">
      <input type="text" id="ticker" class="input" placeholder="Ticker (e.g. RELIANCE.NS)" required>
      <input type="text" id="name" class="input" placeholder="Company name" required>
      <input type="text" id="sector" class="input" placeholder="Sector (optional)">
      <button type="submit" class="btn btn-primary">Add stock</button>
    </form>
    <div class="card-box">
      <table class="admin-table">
        <thead><tr><th>Ticker</th><th>Name</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="stocks-body"><tr><td colspan="4">Loading&hellip;</td></tr></tbody>
      </table>
    </div>`;

  document.getElementById('add-stock-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    await adminFetch('/api/admin/stocks', {
      method: 'POST',
      body: JSON.stringify({
        ticker: document.getElementById('ticker').value,
        name: document.getElementById('name').value,
        sector: document.getElementById('sector').value,
      }),
    });
    loadStocks();
  });

  const stocks = await adminFetch('/api/admin/stocks');
  document.getElementById('stocks-body').innerHTML = stocks.map((s) => `
    <tr data-id="${s.id}">
      <td>${s.ticker}</td>
      <td>${s.name}</td>
      <td><span class="status-pill ${s.is_active ? 'status-published' : 'status-draft'}">${s.is_active ? 'Active' : 'Paused'}</span></td>
      <td class="row-actions">
        <button class="btn btn-secondary btn-sm" data-action="toggle">${s.is_active ? 'Pause' : 'Resume'}</button>
        <button class="btn btn-secondary btn-sm" data-action="run">Run now</button>
      </td>
    </tr>`).join('');

  document.querySelectorAll('[data-action="toggle"]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const row = btn.closest('tr');
      const currentlyActive = row.querySelector('.status-pill').textContent.trim() === 'Active';
      await adminFetch(`/api/admin/stocks/${row.dataset.id}`, { method: 'PATCH', body: JSON.stringify({ is_active: !currentlyActive }) });
      loadStocks();
    });
  });

  document.querySelectorAll('[data-action="run"]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      btn.textContent = 'Running…';
      btn.disabled = true;
      try {
        await adminFetch(`/api/admin/stocks/${btn.closest('tr').dataset.id}/run`, { method: 'POST' });
        alert('Run complete — check the review queue.');
      } catch {
        alert('Run failed — check logs.');
      }
      btn.textContent = 'Run now';
      btn.disabled = false;
    });
  });
}

// --- Trade journal ---
// Every entry here is a trade the admin has ALREADY executed themselves, through
// their own broker, before logging it. Nothing here decides or places a trade.
async function loadJournal() {
  const el = document.getElementById('tab-journal');
  el.innerHTML = `
    <div class="login-error" style="background:var(--pill-neutral-bg); color:var(--text-secondary); margin-bottom:20px;">
      This journal only records trades you've already made yourself. It never generates a trade or a signal.
    </div>
    <form id="add-trade-form" class="add-trade-form">
      <input type="text" id="t-ticker" class="input" placeholder="Ticker (e.g. RELIANCE.NS)" required>
      <input type="text" id="t-name" class="input" placeholder="Company name" required>
      <input type="number" id="t-quantity" class="input" placeholder="Quantity" step="any" required>
      <input type="number" id="t-price" class="input" placeholder="Entry price (₹)" step="any" required>
      <input type="date" id="t-date" class="input" required>
      <button type="submit" class="btn btn-primary">Log trade</button>
      <textarea id="t-notes" class="textarea full" placeholder="Why you made this trade (optional, shown publicly)" rows="2"></textarea>
    </form>
    <div class="card-box">
      <table class="admin-table">
        <thead><tr><th>Ticker</th><th>Entry</th><th>Status</th><th>P&amp;L</th><th>Actions</th></tr></thead>
        <tbody id="trades-body"><tr><td colspan="5">Loading&hellip;</td></tr></tbody>
      </table>
    </div>`;

  document.getElementById('add-trade-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    await adminFetch('/api/admin/trades', {
      method: 'POST',
      body: JSON.stringify({
        ticker: document.getElementById('t-ticker').value,
        name: document.getElementById('t-name').value,
        quantity: document.getElementById('t-quantity').value,
        entry_price: document.getElementById('t-price').value,
        entry_date: document.getElementById('t-date').value,
        entry_notes: document.getElementById('t-notes').value,
      }),
    });
    loadJournal();
  });

  const trades = await adminFetch('/api/admin/trades');
  document.getElementById('trades-body').innerHTML = trades.map((t) => {
    const isClosed = t.status === 'closed';
    const pnlPct = isClosed
      ? ((t.exit_price - t.entry_price) / t.entry_price) * 100
      : null;
    return `
      <tr data-id="${t.id}">
        <td>${t.ticker}<div style="font-size:11px; color:var(--text-muted);">${t.name}</div></td>
        <td>${fmtINR(t.entry_price)} &times; ${t.quantity}<div style="font-size:11px; color:var(--text-muted);">${fmtDateOnly(t.entry_date)}</div></td>
        <td><span class="status-pill ${isClosed ? 'status-published' : 'status-draft'}">${isClosed ? 'Closed' : 'Open'}</span></td>
        <td>${pnlPct != null ? `<span class="pnl ${pnlPct >= 0 ? 'up' : 'down'}">${pnlPct >= 0 ? '+' : ''}${pnlPct.toFixed(2)}%</span>` : '—'}</td>
        <td class="row-actions">
          ${isClosed ? '' : '<button class="btn btn-secondary btn-sm" data-action="close">Close position</button>'}
          <button class="btn btn-danger btn-sm" data-action="delete">Delete</button>
        </td>
      </tr>
      <tr class="close-trade-tr" data-close-for="${t.id}">
        <td colspan="5" style="padding:0;">
          <div class="close-trade-grid" style="border-top:1px solid var(--border);">
            <input type="number" class="input close-exit-price" placeholder="Exit price (₹)" step="any">
            <input type="date" class="input close-exit-date">
            <input type="text" class="input close-exit-notes" placeholder="Why you exited (optional)">
            <button class="btn btn-primary btn-sm" data-action="confirm-close">Confirm</button>
          </div>
        </td>
      </tr>`;
  }).join('') || `<tr><td colspan="5">No trades logged yet.</td></tr>`;

  document.querySelectorAll('[data-action="close"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.closest('tr').dataset.id;
      document.querySelector(`[data-close-for="${id}"]`).classList.add('open');
    });
  });

  document.querySelectorAll('[data-action="confirm-close"]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const wrap = btn.closest('tr');
      const id = wrap.dataset.closeFor;
      const exit_price = wrap.querySelector('.close-exit-price').value;
      const exit_date = wrap.querySelector('.close-exit-date').value;
      const exit_notes = wrap.querySelector('.close-exit-notes').value;
      if (!exit_price || !exit_date) { alert('Exit price and date are required.'); return; }
      await adminFetch(`/api/admin/trades/${id}/close`, {
        method: 'PATCH',
        body: JSON.stringify({ exit_price, exit_date, exit_notes }),
      });
      loadJournal();
    });
  });

  document.querySelectorAll('[data-action="delete"]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      if (!confirm('Delete this trade entry permanently?')) return;
      await adminFetch(`/api/admin/trades/${btn.closest('tr').dataset.id}`, { method: 'DELETE' });
      loadJournal();
    });
  });
}

// --- Logs ---
async function loadLogs() {
  const el = document.getElementById('tab-logs');
  el.innerHTML = `<div class="empty-state">Loading&hellip;</div>`;
  const logs = await adminFetch('/api/admin/logs?limit=100');
  el.innerHTML = `
    <div class="card-box">
      <table class="admin-table">
        <thead><tr><th>Time</th><th>Stage</th><th>Data</th></tr></thead>
        <tbody>
          ${logs.map((l) => `
            <tr>
              <td style="white-space:nowrap; font-family:ui-monospace,monospace; font-size:11.5px;">${fmtDate(l.created_at)}</td>
              <td>${l.stage}</td>
              <td style="font-family:ui-monospace,monospace; font-size:11px; max-width:400px; overflow-wrap:anywhere;">${JSON.stringify(l.data).slice(0, 300)}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

// --- Pause toggle ---
let isPaused = false;
function refreshPauseUI() {
  document.getElementById('pause-toggle').textContent = isPaused ? 'Resume pipeline' : 'Pause pipeline';
  document.getElementById('pause-banner').hidden = !isPaused;
}
document.getElementById('pause-toggle').addEventListener('click', async () => {
  const endpoint = isPaused ? 'resume' : 'pause';
  await adminFetch(`/api/admin/pipeline/${endpoint}`, { method: 'POST' });
  isPaused = !isPaused;
  refreshPauseUI();
});

refreshPauseUI();
loadReviewQueue();
