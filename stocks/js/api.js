async function stocksApiGet(path) {
  const res = await fetch(`${STOCKS_API_BASE}${path}`);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

function fmtINR(value) {
  if (value == null) return '—';
  return `₹${Number(value).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
}

function fmtChange(current, previous) {
  if (current == null || previous == null) return null;
  const diff = current - previous;
  const pct = previous ? (diff / previous) * 100 : 0;
  return { diff, pct, isUp: diff >= 0 };
}

function fmtDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
