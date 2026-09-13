const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const root = __dirname;
const dataDir = path.join(root, 'data');
const menuFile = path.join(dataDir, 'menu.json');
const ordersFile = path.join(dataDir, 'orders.json');

app.use(express.json());
app.use((req, res, next) => {
  if (req.path.startsWith('/data/')) return res.sendStatus(404);
  next();
});
app.use(express.static(root, { index: 'BushCanteen.html' }));

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeJson(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

function getOrder(orderId) {
  return readJson(ordersFile).find((order) => order.id === orderId);
}

function buildReceipt(order) {
  const rows = order.items.map((item) => `<tr><td>${item.quantity} x ${item.name}</td><td>${formatMoney(item.lineTotal)}</td></tr>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Receipt ${order.id}</title><style>body{font-family:Arial,sans-serif;max-width:420px;margin:30px auto;padding:20px;color:#173b35}h1{text-align:center;font-size:24px;margin-bottom:4px}p{text-align:center;color:#667}table{width:100%;border-collapse:collapse;margin:22px 0}td{padding:9px 0;border-bottom:1px solid #dce6df}td:last-child{text-align:right;font-weight:700}.total{font-size:19px;font-weight:700;border-top:2px solid #173b35;padding-top:14px}.meta{font-size:12px;text-align:center}@media print{body{margin:0}}</style></head><body><h1>BUSH CANTEEN</h1><p>Restaurant</p><p class="meta">${order.id} · ${new Date(order.createdAt).toLocaleString()}</p><p class="meta">${order.orderType} · ${order.customerRef}</p><table>${rows}<tr><td>Payment</td><td>${order.paymentMethod}</td></tr><tr class="total"><td>Total</td><td>${formatMoney(order.total)}</td></tr></table><p>Thank you for dining with us.</p><script>window.addEventListener('load',()=>window.print())</script></body></html>`;
}

function formatMoney(value) {
  return `GHS ${Number(value).toFixed(2)}`;
}

app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'bush-canteen-api' }));

app.get('/api/menu', (req, res) => res.json(readJson(menuFile)));

app.get('/api/orders', (req, res) => {
  const orders = readJson(ordersFile).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.json(orders);
});

app.get('/api/orders/:id/receipt', (req, res) => {
  const order = getOrder(req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.type('html').send(buildReceipt(order));
});

app.post('/api/orders', (req, res) => {
  const { items, paymentMethod = 'Cash', orderType = 'Eat-In', customerRef = 'Walk-in customer', staff = 'Isaac Asamoah' } = req.body;
  if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ error: 'At least one order item is required' });

  const menu = readJson(menuFile);
  const normalizedItems = items.map((requested) => {
    const menuItem = menu.find((item) => item.id === requested.id);
    const quantity = Math.max(1, Number(requested.quantity) || 1);
    if (!menuItem) throw new Error(`Unknown menu item: ${requested.id}`);
    return { ...menuItem, quantity, lineTotal: menuItem.price * quantity };
  });
  const order = {
    id: `BC-${crypto.randomInt(1000, 9999)}`,
    createdAt: new Date().toISOString(),
    status: 'Paid',
    paymentMethod,
    orderType,
    customerRef,
    staff,
    items: normalizedItems,
    total: normalizedItems.reduce((sum, item) => sum + item.lineTotal, 0)
  };
  const orders = readJson(ordersFile);
  orders.push(order);
  writeJson(ordersFile, orders);
  res.status(201).json({ order, receiptUrl: `/api/orders/${order.id}/receipt` });
});

app.use((error, req, res, next) => {
  if (error.message.startsWith('Unknown menu item')) return res.status(400).json({ error: error.message });
  next(error);
});

app.listen(PORT, () => console.log(`Bush Canteen running at http://localhost:${PORT}`));
