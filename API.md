# Bush Canteen API

Base URL: `http://localhost:3000`

## Health

`GET /api/health`

Returns `{ "status": "ok", "service": "bush-canteen-api" }`.

## Menu

`GET /api/menu`

Returns the server-approved menu. The order endpoint uses this list to prevent clients from changing prices.

## Create Order

`POST /api/orders`

Request body:

```json
{
  "items": [{ "id": "banku-tilapia", "quantity": 1 }],
  "paymentMethod": "Cash",
  "orderType": "Eat-In",
  "customerRef": "Table 4",
  "staff": "Isaac Asamoah"
}
```

The response includes the saved order and a `receiptUrl`.

## List Orders

`GET /api/orders`

Returns saved orders in newest-first order. Protect this route with authentication before deploying publicly.

## Receipt

`GET /api/orders/:id/receipt`

Returns a self-contained printable HTML receipt. The frontend opens this URL in a new tab after successful payment.

## Error Responses

Errors use JSON:

```json
{ "error": "At least one order item is required" }
```

Common status codes are `400` for invalid order data and `404` for missing orders or protected data files.
