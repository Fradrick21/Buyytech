import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  CalendarDays,
  Package,
  Truck,
  CreditCard,
  ClipboardList,
  Printer,
  X,
} from "lucide-react";

const tabs = ["All", "Processing", "Delivering", "Completed", "Cancelled"];

const orders = [
  {
    id: "#69537",
    status: "Processing",
    date: "11:12 AM, 24 April, 2027",
    items: "114 Products",
    method: "Free Delivery",
    amount: "\u20B9400.00",
    paid: true,
  },
  {
    id: "#69537",
    status: "Cancelled",
    date: "11:12 AM, 24 April, 2027",
    items: "114 Products",
    method: "Free Delivery",
    amount: "\u20B9400.00",
    paid: true,
  },
  {
    id: "#69537",
    status: "Delivering",
    date: "11:12 AM, 24 April, 2027",
    items: "114 Products",
    method: "Free Delivery",
    amount: "\u20B9400.00",
    paid: true,
  },
  {
    id: "#69538",
    status: "Completed",
    date: "09:30 AM, 18 April, 2027",
    items: "56 Products",
    method: "Free Delivery",
    amount: "\u20B9220.00",
    paid: true,
  },
];

const statusStyles = {
  Processing: "bg-amber-100 text-amber-700",
  Delivering: "bg-sky-100 text-sky-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-rose-100 text-rose-700",
};

const sellerInfo = [
  "GoBright",
  "Paradise Towers Complex,",
  "No. 52/B, First Floor,Thennur High Road,",
  "Trichy-620017,Tamilnadu",
  "GSTIN: XXXXX",
  "Email: gobright.growth@gmail.com",
  "Phone: 8925550774",
];

const sellerEmail = "gobright.growth@gmail.com";

const buyerInfo = ["GSKT", "Address line", "City, State", "GSTIN: XXXXX"];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

const parseCurrency = (value) => Number(String(value).replace(/[^0-9.]/g, "")) || 0;

const buildInvoiceRows = (order) => {
  const total = parseCurrency(order.amount);
  const subtotal = total / 1.12;
  const weights = [0.5, 0.3, 0.2];
  const quantities = [3, 2, 1];

  let allocated = 0;

  return weights.map((weight, index) => {
    const isLast = index === weights.length - 1;
    const amount = isLast ? subtotal - allocated : subtotal * weight;
    allocated += isLast ? 0 : amount;
    const qty = quantities[index];

    return {
      no: index + 1,
      item: `Item 0${index + 1}`,
      hsn: String(1234 + index),
      qty,
      price: amount / qty,
      amount,
    };
  });
};

const QR_SIZE = 21;
const QR_MARGIN = 4;

const isFinderCell = (x, y) => {
  const inTopLeft = x < 7 && y < 7;
  const inTopRight = x >= QR_SIZE - 7 && y < 7;
  const inBottomLeft = x < 7 && y >= QR_SIZE - 7;

  return inTopLeft || inTopRight || inBottomLeft;
};

const isAlignmentCell = (x, y) =>
  x >= 8 && x <= 12 && y >= 8 && y <= 12 && !(x === 10 && y === 10);

const isDataCell = (x, y) => {
  if (isFinderCell(x, y) || isAlignmentCell(x, y)) {
    return false;
  }

  if (x === 6 || y === 6) {
    return false;
  }

  const seed = (x + 1) * 17 + (y + 1) * 31 + x * y * 7;
  return seed % 3 !== 0;
};

const DummyQr = () => (
  <svg
    viewBox="0 0 120 120"
    className="h-[92px] w-[92px] border border-[#8f8f8f] bg-white p-1"
    aria-label="Dummy QR code"
    role="img"
  >
    <rect width="120" height="120" fill="#ffffff" />

    {Array.from({ length: QR_SIZE }).map((_, y) =>
      Array.from({ length: QR_SIZE }).map((_, x) => {
        const cellSize = 4.5;
        const offset = QR_MARGIN;
        const px = offset + x * cellSize;
        const py = offset + y * cellSize;

        const finderFill = (innerX, innerY) => {
          const isOuter = innerX === 0 || innerX === 6 || innerY === 0 || innerY === 6;
          const isInner = innerX >= 2 && innerX <= 4 && innerY >= 2 && innerY <= 4;

          return isOuter || isInner;
        };

        if (x < 7 && y < 7) {
          return (
            <g key={`tl-${x}-${y}`}>
              {finderFill(x, y) && (
                <rect x={px} y={py} width={cellSize} height={cellSize} fill="#111827" />
              )}
            </g>
          );
        }

        if (x >= QR_SIZE - 7 && y < 7) {
          const rx = x - (QR_SIZE - 7);
          return (
            <g key={`tr-${x}-${y}`}>
              {finderFill(rx, y) && (
                <rect x={px} y={py} width={cellSize} height={cellSize} fill="#111827" />
              )}
            </g>
          );
        }

        if (x < 7 && y >= QR_SIZE - 7) {
          const ry = y - (QR_SIZE - 7);
          return (
            <g key={`bl-${x}-${y}`}>
              {finderFill(x, ry) && (
                <rect x={px} y={py} width={cellSize} height={cellSize} fill="#111827" />
              )}
            </g>
          );
        }

        if (x >= 8 && x <= 12 && y >= 8 && y <= 12) {
          const ring = x === 8 || x === 12 || y === 8 || y === 12;
          const center = x >= 9 && x <= 11 && y >= 9 && y <= 11;

          if (ring || center) {
            return (
              <rect
                key={`align-${x}-${y}`}
                x={px}
                y={py}
                width={cellSize}
                height={cellSize}
                fill="#111827"
              />
            );
          }

          return null;
        }

        if (x === 6 || y === 6) {
          return null;
        }

        if (isDataCell(x, y)) {
          return (
            <rect
              key={`data-${x}-${y}`}
              x={px}
              y={py}
              width={cellSize}
              height={cellSize}
              fill="#111827"
            />
          );
        }

        return null;
      })
    )}
  </svg>
);

const Orders = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (!selectedOrder) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedOrder(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedOrder]);

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  const handleOpenInvoice = (order) => {
    document.title = "Tax Invoice";
    setSelectedOrder(order);
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  const buildGmailComposeUrl = (order) => {
    const subject = `Invoice ${order.id}`;
    const body = `Hi,\n\nPlease find the invoice for order ${order.id}.`;

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      sellerEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleMailInvoice = (order) => {
    window.open(buildGmailComposeUrl(order), "_blank", "noopener,noreferrer");
  };

  const handleCloseInvoice = () => {
    document.title = "Pilot";
    setSelectedOrder(null);
  };

  return (
    <div className="orders-page w-full bg-gray-50 px-4 py-8 md:px-6 lg:px-8">
      <div className="w-full">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
          Orders History
        </h2>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-teal-100 text-teal-700"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="space-y-5">
        {filteredOrders.map((order, index) => {
          const badgeClass =
            statusStyles[order.status] || "bg-gray-100 text-gray-700";

          return (
            <div
              key={`${order.id}-${index}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-gray-700">
                  Order ID: {order.id}
                </p>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div className="grid gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <CalendarDays size={16} className="text-gray-500" />
                    <span className="w-28 text-gray-500">Order Date:</span>
                    <span>{order.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package size={16} className="text-gray-500" />
                    <span className="w-28 text-gray-500">Order Items:</span>
                    <span>{order.items}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck size={16} className="text-gray-500" />
                    <span className="w-28 text-gray-500">Delivery Method:</span>
                    <span>{order.method}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard size={16} className="text-gray-500" />
                    <span className="w-28 text-gray-500">Amount Payable:</span>
                    <span>
                      {order.amount} <span className="text-emerald-600">(Paid)</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 md:items-end">
                  <button
                    type="button"
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    View Details
                  </button>
                  {order.status === "Completed" && (
                    <button
                      type="button"
                      onClick={() => handleOpenInvoice(order)}
                      className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-100"
                    >
                      <Printer size={16} />
                      Print
                    </button>
                  )}
                  <button
                    type="button"
                    className="rounded-full bg-[#113768CC] px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    Order Again
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filteredOrders.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
            <ClipboardList className="mx-auto mb-3 text-gray-400" size={28} />
            No orders found in this section.
          </div>
        )}
      </div>

      {selectedOrder &&
        createPortal(
          <div
            className="invoice-print-root fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-200/90 p-2 md:p-4"
            onClick={handleCloseInvoice}
          >
            <div
              className="w-full max-w-[884px] border border-[#bdbdbd] bg-[#fafafa] p-2 sm:p-[10px] print:mx-auto print:w-[840px] print:max-w-[840px] print:border-0 print:bg-transparent print:p-0"
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className="invoice-sheet border border-[#7f7f7f] bg-white print:mx-auto print:w-[760px] print:overflow-visible"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
              <div className="invoice-topbar flex items-center justify-between border-b border-[#7f7f7f] px-3 py-1 text-[10px] font-semibold text-[#1f2937]">
                <span>4/21/26, 11:09 AM</span>
                <span>Tax Invoice</span>
                <span className="opacity-0">4/21/26, 11:09 AM</span>
              </div>

              <div className="grid grid-cols-1 border-b border-[#7f7f7f] md:grid-cols-2 print-tight">
                <div className="flex h-auto items-center justify-center border-b border-[#7f7f7f] px-4 py-4 md:h-[90px] md:border-b-0 md:border-r md:py-0">
                  <h3 className="text-[24px] font-bold tracking-tight text-black sm:text-[31px] print-compact-text">
                    Tax Invoice
                  </h3>
                </div>
                <div className="flex h-auto items-center justify-center px-4 py-4 md:h-[90px] md:py-0">
                  <img
                    src="/logo.png"
                    alt="Tech Buyy logo"
                    className="h-[48px] w-auto object-contain sm:h-[58px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 border-b border-[#7f7f7f] md:grid-cols-2 print-compact">
                <div className="border-b border-[#7f7f7f] px-4 py-4 md:border-b-0 md:border-r md:px-[16px] md:py-[18px]">
                  <div className="space-y-1 text-[13px] leading-[1.45] text-[#1f2937] sm:text-[15px] print-compact-text">
                    {sellerInfo.map((line, lineIndex) => (
                      <p key={lineIndex} className={lineIndex === 0 ? "font-bold text-black" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="px-4 py-4 md:px-[16px] md:py-[18px]">
                  <div className="grid grid-cols-[104px_1fr] gap-y-2 text-[13px] leading-[1.4] text-[#1f2937] sm:grid-cols-[128px_1fr] sm:gap-y-[11px] sm:text-[15px] print-compact-text">
                    <span>Invoice No:</span>
                    <span className="pl-2 sm:pl-[12px]">123</span>
                    <span>Date:</span>
                    <span className="pl-2 sm:pl-[12px]">4/21/2026</span>
                    <span>Order No:</span>
                    <span className="pl-2 sm:pl-[12px]">456</span>
                    <span>Vehicle No:</span>
                    <span className="pl-2 sm:pl-[12px]">TN01AB1234</span>
                    <span>Payment:</span>
                    <span className="pl-2 sm:pl-[12px]">Cash</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 border-b border-[#7f7f7f] md:grid-cols-2 print-compact">
                <div className="border-b border-[#7f7f7f] px-4 py-4 md:border-b-0 md:border-r md:px-[16px] md:py-[18px]">
                  <h4 className="mb-1 text-[13px] font-bold text-black sm:text-[15px] print-compact-text">
                    Buyer Details
                  </h4>
                  <div className="space-y-1 text-[13px] leading-[1.45] text-[#1f2937] sm:text-[15px] print-compact-text">
                    {buyerInfo.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
                <div className="px-4 py-4 md:px-[16px] md:py-[18px]">
                  <h4 className="mb-1 text-[13px] font-bold text-black sm:text-[15px] print-compact-text">
                    Terms & Conditions
                  </h4>
                  <p className="text-[13px] leading-[1.45] text-[#1f2937] sm:text-[15px] print-compact-text">
                    Goods once sold cannot be returned.
                  </p>
                </div>
              </div>

              <div className="border-b border-[#7f7f7f]">
                <div className="overflow-x-auto md:overflow-visible">
                  <table className="w-full min-w-[620px] border-collapse text-[13px] text-[#1f2937] md:min-w-0 md:text-[14px]">
                    <thead>
                      <tr className="bg-[#e6e7eb] text-black">
                        <th className="border-r border-[#7f7f7f] px-3 py-[9px] text-center font-bold">
                          Sl No
                        </th>
                        <th className="border-r border-[#7f7f7f] px-3 py-[9px] text-center font-bold">
                          Item
                        </th>
                        <th className="border-r border-[#7f7f7f] px-3 py-[9px] text-center font-bold">
                          HSN
                        </th>
                        <th className="border-r border-[#7f7f7f] px-3 py-[9px] text-center font-bold">
                          Qty
                        </th>
                        <th className="border-r border-[#7f7f7f] px-3 py-[9px] text-center font-bold">
                          Price
                        </th>
                        <th className="px-3 py-[9px] text-center font-bold">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {buildInvoiceRows(selectedOrder).map((row) => (
                        <tr key={row.no}>
                          <td className="border-r border-t border-[#7f7f7f] px-3 py-[10px] text-center md:py-[12px]">
                            {row.no}
                          </td>
                          <td className="border-r border-t border-[#7f7f7f] px-3 py-[10px] text-center md:py-[12px]">
                            {row.item}
                          </td>
                          <td className="border-r border-t border-[#7f7f7f] px-3 py-[10px] text-center md:py-[12px]">
                            {row.hsn}
                          </td>
                          <td className="border-r border-t border-[#7f7f7f] px-3 py-[10px] text-center md:py-[12px]">
                            {row.qty}
                          </td>
                          <td className="border-r border-t border-[#7f7f7f] px-3 py-[10px] text-center md:py-[12px]">
                            {formatCurrency(row.price)}
                          </td>
                          <td className="border-t border-[#7f7f7f] px-3 py-[10px] text-center md:py-[12px]">
                            {formatCurrency(row.amount)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 border-b border-[#7f7f7f] px-4 py-4 md:grid-cols-2 md:px-[16px] md:py-[18px] print-tight">
                <div className="pb-4 md:pr-4 md:pb-0">
                  <p className="text-[13px] font-bold text-black sm:text-[15px] print-compact-text">
                    Total Amount in Words:
                  </p>
                  <p className="mt-1 text-[13px] text-[#1f2937] sm:text-[14px] print-compact-text">
                    Rupees One Thousand Nineteen Only
                  </p>
                </div>
                <div className="pt-2 text-[13px] text-[#1f2937] md:pl-4 md:pt-0 sm:text-[15px] print-compact-text">
                  <div className="space-y-2 md:space-y-3">
                    <div className="grid grid-cols-[auto_auto] justify-start gap-x-2 md:justify-end">
                      <span>Sub Total:</span>
                      <span>{formatCurrency(parseCurrency(selectedOrder.amount) / 1.12)}</span>
                    </div>
                    <div className="grid grid-cols-[auto_auto] justify-start gap-x-2 md:justify-end">
                      <span>Tax (12%):</span>
                      <span>{formatCurrency(parseCurrency(selectedOrder.amount) - parseCurrency(selectedOrder.amount) / 1.12)}</span>
                    </div>
                    <div className="grid grid-cols-[auto_auto] justify-start gap-x-2 pt-2 text-[18px] font-bold text-black md:justify-end md:text-[20px]">
                      <span>Total:</span>
                      <span>{selectedOrder.amount}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid min-h-[170px] grid-cols-1 px-4 py-4 md:grid-cols-[160px_1fr] md:px-[16px] md:py-[16px] print-compact">
                <div className="invoice-no-print flex flex-col items-start">
                  <p className="mb-3 text-[13px] text-[#1f2937] sm:text-[15px]">Scan To Pay</p>
                  <div className="scale-[0.88] origin-top-left sm:scale-100">
                    <DummyQr />
                  </div>
                  <button
                    type="button"
                    onClick={handlePrintInvoice}
                    className="no-print mt-3 block w-full rounded-[3px] bg-[#17223b] px-4 py-2 text-[13px] font-bold text-white sm:mt-4 sm:text-[14px]"
                  >
                    Print Invoice
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMailInvoice(selectedOrder)}
                    className="no-print mt-3 block w-full rounded-[3px] bg-red-600 px-4 py-2 text-[13px] font-bold text-white sm:text-[14px]"
                  >
                    Mail Invoice
                  </button>
                </div>

                <div className="mt-6 flex flex-col items-center justify-end pb-1 md:mt-0 print-compact-text">
                  <div className="mt-auto text-center">
                    <p className="text-[13px] font-bold text-black sm:text-[14px]">Declaration:</p>
                    <p className="text-[12px] text-[#1f2937] sm:text-[13px]">
                      This is a computer generated invoice.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
};

export default Orders;
