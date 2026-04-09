import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Star,
  IndianRupee,
  MapPin,
  Truck,
  Store,
  ShieldCheck,
  RotateCcw,
  Wallet,
  BadgeCheck,
  Cpu,
  HardDrive,
  Monitor,
  Weight,
  ScanLine,
  ShoppingCart,
} from "lucide-react";

const RUPEE = "\u20B9";
const DOWN = "\u2193";
const BULLET = "\u2022";

function RupeeText({ value, className = "h-[1em] w-[1em]" }) {
  return (
    <span className="inline-flex items-center">
      <IndianRupee className={`${className} shrink-0`} />
      <span>{value}</span>
    </span>
  );
}

const mediaItems = [
  {
    id: 1,
    type: "image",
    fit: "contain",
    image:
      "/Products/1.jpg",
  },
  {
    id: 2,
    type: "video",
    fit: "cover",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/ZZmxIH7A_Y0?autoplay=1&rel=0",
    image:
      "/Products/2.jpg",
  },
  {
    id: 3,
    type: "image",
    fit: "contain",
    image:
      "/Products/3.jpg",
  },
  {
    id: 4,
    type: "image",
    fit: "contain",
    image:
      "/Products/4.jpg",
  },
];

const memoryOptions = ["8 GB", "16 GB"];

const variants = [
  {
    id: 1,
    title: "512 GB, 14 Inch",
    discount: "40%",
    oldPrice: "69,990",
    price: "41,990",
  },
  {
    id: 2,
    title: "512 GB, 15.6 Inch",
    discount: "40%",
    oldPrice: "69,990",
    price: "41,990",
  },
];

const offers = [
  {
    title: `2,100 off`,
    subtitle: "Flipkart Axis",
    footer: `Credit Card ${BULLET} Cashback`,
    badge: "Best value for you",
  },
  {
    title: `1,250 off`,
    subtitle: "HDFC",
    footer: "Credit Card",
  },
  {
    title: `2,100 off`,
    subtitle: "Flipkart SBI",
    footer: `Credit Card ${BULLET} Cashback`,
  },
  {
    title: `750 off`,
    subtitle: "Flipkart Axis",
    footer: `Debit Card ${BULLET} Cashback`,
  },
];

const featureChips = [
  { icon: RotateCcw, label: "7 Days Replacement" },
  { icon: Wallet, label: "Cash on Delivery" },
  { icon: BadgeCheck, label: "Flipkart Assured" },
];

const highlights = [
  {
    icon: Cpu,
    title: "Intel Core i3 13th Gen",
    text: "Efficient performance for everyday use.",
  },
  {
    icon: HardDrive,
    title: "8 GB | 512 GB",
    text: "Smooth gaming and video editing experience",
  },
  {
    icon: Monitor,
    title: "14 Inch | Full HD Display | 60 Hz",
    text: "Clear and detailed visuals.",
  },
  {
    icon: ScanLine,
    title: "Intel Integrated",
    text: "Efficient graphics for everyday use",
  },
  {
    icon: Weight,
    title: "1.4 Kg",
    text: "Lightweight and easy to carry",
  },
];

const overviewCards = [
  {
    title: "Worry-free Super Fast Performance",
    description:
      "The ExpertBook P1 features a Gen Intel Core i3 (U-series) Processor, 8GB DDR5 RAM, and a fast SSD that keeps multitasking smooth. It is designed for everyday office work, browsing, meetings, content viewing, and reliable performance throughout the day without unnecessary slowdowns.",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/p/i/a/-original-imahg53uwgmhzfcd.jpeg?q=90",
  },
  {
    title: "Built for Worry-Free Business",
    description:
      "Discover the ASUS ExpertBook P1, powered by the 13th Gen Intel Core i3 (U-series) processor and built with a practical design for professional use. Its lightweight body, dependable battery life, and business-ready build make it a solid choice for work, study, travel, and daily productivity tasks.",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/x/n/b/-original-imahg53ubg53fcgr.jpeg?q=90",
  },
];

const reviewGallery = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=800&auto=format&fit=crop",
];

const scoreChips = [
  "Performance 4.2",
  "Battery 3.8",
  "Design 4.4",
  "Display 4.2",
  "Value for Money 4.2",
];

function OfferCard({ item }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#f8f8f8] px-3 py-2.5">
      {item.badge && (
        <div className="mb-1 inline-block cursor-pointer rounded-md bg-[#fee79a] px-2 py-0.5 text-[11px] font-semibold text-slate-800">
          {item.badge}
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="cursor-pointer">
          <div className="cursor-pointer text-[15px] font-bold leading-5 text-slate-900">
            <RupeeText value={item.title} className="h-[0.95em] w-[0.95em]" />
          </div>
          <div className="cursor-pointer text-[14px] leading-5 text-slate-700">
            {item.subtitle}
          </div>
          <div className="mt-1 cursor-pointer text-[13px] font-medium leading-5 text-slate-700">
            {item.footer}
          </div>
        </div>

        <button className="cursor-pointer text-[14px] font-semibold text-[#1c63e6]">
          Apply
        </button>
      </div>
    </div>
  );
}

function Product({ productId = null }) {
  const navigate = useNavigate();
  const [selectedMemory, setSelectedMemory] = useState("8 GB");
  const [selectedVariant, setSelectedVariant] = useState(1);
  const images = mediaItems.map((item) => item.image);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [expandedReview, setExpandedReview] = useState(null);
  const [expandedOverview, setExpandedOverview] = useState(null);
  const [showEmiCard, setShowEmiCard] = useState(true);
  const [showDeliveryDetails, setShowDeliveryDetails] = useState(true);
  const [showOffersSection, setShowOffersSection] = useState(true);
  const [showHighlights, setShowHighlights] = useState(true);
  const [showAllDetails, setShowAllDetails] = useState(true);
  const [showReviews, setShowReviews] = useState(true);

  const selectedVariantData =
    variants.find((item) => item.id === selectedVariant) ?? variants[0];

  return (
    <div
      className="min-h-screen bg-white px-2 py-3 pb-24 sm:px-3 md:px-4 lg:px-5"
      data-product-id={productId ?? undefined}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-4 hidden overflow-hidden text-ellipsis whitespace-nowrap text-[13px] text-slate-500 md:block">
          Home / Computers / Laptops /
          Lenovo IdeaPad Slim 3 Intel Core i3 12th Gen 1215U - (8 GB/256 GB SSD/Windows 11 Home) 15IAU7 Thin and Light Laptop
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_480px]">
          <div className="max-w-7xl self-start px-1 py-4 sm:px-2 sm:py-6 lg:sticky lg:top-24 lg:px-4 lg:py-10">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[88px_minmax(0,1fr)] lg:gap-10">
              <div className="order-2 flex gap-3 overflow-x-auto pb-2 lg:order-1 lg:flex-col lg:overflow-visible lg:pb-0">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Product thumbnail ${i + 1}`}
                    onClick={() => setSelectedImage(img)}
                    className={`h-20 w-16 shrink-0 cursor-pointer rounded-xl border object-cover sm:h-24 sm:w-20 ${selectedImage === img ? "border-black" : "border-gray-200"
                      }`}
                  />
                ))}
              </div>

              <div className="order-1 flex flex-1 items-center justify-center rounded-[18px] p-2 sm:p-4 lg:order-2">
                <img
                  src={selectedImage}
                  alt="Selected product"
                  className="h-[260px] w-full rounded-[18px] object-contain sm:h-[360px] md:h-[440px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>

          <div className="xl:pl-1">
            <div className="mb-6 flex flex-col gap-3 rounded-[20px] bg-[#f5f5f5] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
              <div className="min-w-0 sm:min-w-[110px]">
                <div className="text-[9px] uppercase tracking-wide text-slate-400">
                  Sponsored
                </div>
                <div className="mt-1 text-[18px] font-black leading-none tracking-[0.12em] text-slate-900 sm:text-[20px] sm:tracking-[0.16em]">
                  SAMSUNG
                </div>
              </div>

              <div className="flex-1 text-center sm:px-4">
                <div className="text-[13px] font-medium leading-5 text-slate-800 sm:text-[14px]">
                  Galaxy Book5 | Intel Core Ultra 5
                </div>
                <div className="text-[17px] font-bold leading-6 text-slate-900 sm:text-[18px]">
                  <RupeeText value="64,490*" className="h-[0.95em] w-[0.95em]" />
                </div>
              </div>

              <div className="flex w-full shrink-0 items-center justify-center sm:w-[56px]">
                <img
                  src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=300&auto=format&fit=crop"
                  alt="Samsung laptop"
                  className="max-h-[48px] w-auto object-contain"
                />
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-3 text-[16px] font-semibold text-slate-900 sm:text-[17px]">
                System Memory:{" "}
                <span className="font-normal">{selectedMemory}</span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {memoryOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedMemory(item)}
                    className={`rounded-2xl border px-4 py-2.5 text-[15px] font-medium transition sm:px-5 sm:py-3 sm:text-[17px] ${selectedMemory === item
                      ? "cursor-pointer border-slate-800 bg-[#f4f4f4] text-slate-900"
                      : "cursor-pointer border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-3 text-[16px] font-semibold text-slate-900 sm:text-[17px]">
                Variant:{" "}
                <span className="font-normal">{selectedVariantData.title}</span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {variants.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedVariant(item.id)}
                    className={`w-full rounded-2xl border p-3 text-left transition sm:w-[144px] ${selectedVariant === item.id
                      ? "cursor-pointer border-slate-700 bg-white shadow-[0_1px_0_rgba(15,23,42,0.08)]"
                      : "cursor-pointer border-slate-300 bg-white hover:border-slate-400"
                      }`}
                  >
                    <div className="text-[15px] font-semibold leading-5 text-slate-900">
                      {item.title}
                    </div>
                    <div className="mt-1.5 flex items-center gap-1 text-[14px] leading-5">
                      <span className="font-semibold text-green-700">
                        {DOWN}
                        {item.discount}
                      </span>
                      <span className="text-slate-400 line-through">
                        {item.oldPrice}
                      </span>
                    </div>
                    <div className="mt-1 text-[16px] font-bold leading-5 text-slate-900">
                      <RupeeText value={item.price} className="h-[0.95em] w-[0.95em]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-2 cursor-pointer text-[14px] font-semibold text-[#1c63e6]">
              Visit brand store
            </div>

            <h1 className="max-w-[470px] text-[16px] leading-7 text-slate-900 sm:text-[18px] sm:leading-8">
              Lenovo IdeaPad Slim 3, 12th Gen Intel Core i5-12450H (16GB LPDDR5,
              512GB SSD), Anti-glare, FHD 15.6"(39.6cm), Win 11, Office Home 2024,
              Arctic Grey, 1.62Kg, 83ER00MDIN, Thin & Light, Backlit KB Laptop.
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg bg-[#f5f7fb] px-3 py-1.5">
                <span className="text-[16px] font-semibold text-slate-900 sm:text-[18px]">
                  4.3
                </span>
                <Star className="h-4 w-4 fill-green-600 text-green-600" />
              </div>
              <div className="text-[15px] text-slate-500 sm:text-[18px]">| 5,480</div>
            </div>

            <div className="mt-5 flex flex-wrap items-end gap-2">
              <span className="text-[22px] font-bold leading-none text-green-700 sm:text-[26px]">
                {DOWN}40%
              </span>
              <span className="text-[18px] leading-none text-slate-400 line-through sm:text-[24px]">
                69,990
              </span>
              <span className="text-[34px] font-bold leading-none text-slate-900 sm:text-[52px]">
                <RupeeText value="41,990" className="h-[0.9em] w-[0.9em]" />
              </span>
            </div>

            <button className="mt-2 inline-flex cursor-pointer items-center gap-1 text-[14px] text-slate-500">
              +<RupeeText value="136" className="h-[0.95em] w-[0.95em]" /> Protect Promise Fee
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="mt-6 overflow-hidden rounded-[22px] border border-[#8dc4ff] bg-[#eaf4ff] shadow-sm">
              <div className="flex items-start justify-between gap-3 bg-[#1459d7] px-3 py-3 text-white sm:items-center sm:px-4">
                <div className="flex min-w-0 items-start gap-2 sm:items-center">
                  <span className="rounded bg-[#0b3d9c] px-2 py-1 text-[11px] font-black leading-[1.05]">
                    WOW!
                    <br />
                    DEAL
                  </span>
                  <span className="cursor-pointer text-[14px] font-semibold leading-5 sm:text-[15px]">
                    Apply offers for maximum savings
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowOffersSection((prev) => !prev)}
                  className="cursor-pointer rounded-lg p-1"
                >
                  <ChevronRight
                    className={`h-5 w-5 text-white transition ${showOffersSection ? "-rotate-90" : "rotate-90"
                      }`}
                  />
                </button>
              </div>

              {showOffersSection && (
                <div className="space-y-3 p-3">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    <div className="rounded-[22px] border border-[#78bbff] bg-white px-4 py-3 shadow-sm">
                      <div className="cursor-pointer text-[18px] font-bold text-slate-900">
                        <RupeeText value="39,890" className="h-[0.95em] w-[0.95em]" />
                      </div>
                      <div className="cursor-pointer text-[14px] text-slate-700">
                        Lowest price for you
                      </div>
                    </div>

                    <div className="text-center text-[18px] font-bold text-slate-600">
                      OR
                    </div>

                    <div className="rounded-[22px] border border-[#78bbff] bg-white px-4 py-3 shadow-sm">
                      <div className="cursor-pointer text-[18px] font-bold text-slate-900">
                        <RupeeText value="4,666 x 9m" className="h-[0.95em] w-[0.95em]" />
                      </div>
                      <div className="cursor-pointer text-[14px] text-slate-700">
                        Pay <RupeeText value="41,990" className="h-[0.9em] w-[0.9em]" /> {BULLET} No Cost EMI
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[18px] bg-white px-4 py-3 shadow-sm">
                    <div className="text-[15px] font-semibold text-slate-800">
                      Exchange offer{" "}
                      <span className="cursor-pointer font-bold text-[#f46a1d]">
                        Pincode not Serviceable
                      </span>
                    </div>

                    <div className="mt-3 flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-[#fafafa]">
                        <IndianRupee className="h-5 w-5 text-slate-700" />
                      </div>
                      <div className="flex-1">
                        <div className="cursor-pointer text-[16px] font-semibold text-slate-900">
                          Up to <RupeeText value="33,700" className="h-[0.9em] w-[0.9em]" />
                        </div>
                        <button className="inline-flex cursor-pointer items-center gap-1 text-[14px] text-slate-700">
                          Change pincode to exchange item
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[18px] bg-white px-4 py-3 shadow-sm">
                    <div className="mb-3 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                      <div className="cursor-pointer text-[16px] font-semibold text-slate-800">
                        Bank offers
                      </div>
                      <button className="cursor-pointer text-[14px] font-semibold text-slate-700 underline">
                        View EMI offers
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {offers.map((item) => (
                        <OfferCard key={`${item.title}-${item.subtitle}`} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 space-y-6">
              <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-[#f7f7f7]">
                <div className="flex items-center justify-between px-4 py-3">
                  <h3 className="text-[15px] font-semibold text-slate-800">
                    Apply for Card and Instant EMI
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowEmiCard((prev) => !prev)}
                    className="cursor-pointer rounded-lg p-1"
                  >
                    <ChevronRight
                      className={`h-5 w-5 text-slate-500 transition ${showEmiCard ? "-rotate-90" : "rotate-90"
                        }`}
                    />
                  </button>
                </div>
                {showEmiCard && (
                  <div className="px-3 pb-3">
                    <div className="rounded-[16px] border border-slate-200 bg-white px-4 py-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 rounded-md bg-[#f5e11d] px-2 py-1 text-[10px] font-black text-[#1261ff]">
                          EMI
                        </div>
                        <div>
                          <div className="text-[15px] font-semibold text-slate-900">
                            Get Up to 500 Off*
                          </div>
                          <div className="text-[14px] text-slate-600">
                            No cost EMI* | 100% Digital
                          </div>
                          <button className="mt-1 cursor-pointer text-[14px] font-semibold text-[#1c63e6]">
                            Click here for Flipkart EMI
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-[18px] font-semibold text-slate-800">
                    Delivery details
                  </h2>
                  <button
                    type="button"
                    onClick={() => setShowDeliveryDetails((prev) => !prev)}
                    className="cursor-pointer rounded-lg bg-[#f7f7f7] p-1"
                  >
                    <ChevronRight
                      className={`h-5 w-5 text-slate-500 transition ${showDeliveryDetails ? "-rotate-90" : "rotate-90"
                        }`}
                    />
                  </button>
                </div>
                {showDeliveryDetails && (
                  <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white">
                    <div className="flex items-start gap-3 bg-[#e9f3ff] px-4 py-3 sm:items-center">
                      <MapPin className="h-5 w-5 text-slate-600" />
                      <div className="flex-1 text-[15px] font-semibold text-slate-800">
                        Location not set{" "}
                        <button className="cursor-pointer text-[#1c63e6]">
                          Select delivery location
                        </button>
                      </div>
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer text-[#1c63e6] sm:ml-auto" />
                    </div>
                    <div className="border-t border-slate-200 px-4 py-3">
                      <div className="flex items-start gap-3">
                        <Truck className="mt-1 h-5 w-5 text-slate-600" />
                        <div>
                          <div className="text-[15px] font-semibold text-slate-800">
                            Delivery by 30 Mar, Mon
                          </div>
                          <div className="text-[14px] text-[#f97316]">
                            Order in 01h 57m 42s
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-slate-200 px-4 py-3">
                      <div className="flex items-start gap-3">
                        <Store className="mt-1 h-5 w-5 text-slate-600" />
                        <div>
                          <div className="text-[15px] text-slate-700">
                            Fulfilled by SVPeripherals
                          </div>
                          <div className="text-[14px] text-slate-500">
                            4.5 <Star className="mb-0.5 inline h-3.5 w-3.5 fill-slate-400 text-slate-400" /> 3 years with Flipkart
                          </div>
                          <button className="cursor-pointer text-[14px] font-semibold text-[#1c63e6]">
                            See other sellers
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white">
                <div className="flex items-center justify-between bg-[#e9f3ff] px-4 py-3">
                  <div>
                    <div className="text-[15px] font-semibold text-slate-800">
                      599 Authorised installation
                    </div>
                    <div className="text-[14px] text-slate-600">
                      Quick installation by 29 Mar, Sun
                    </div>
                  </div>
                  <button className="cursor-pointer rounded-xl border border-slate-300 bg-white px-3 py-1.5 font-semibold text-slate-700">
                    Remove
                  </button>
                </div>
                <div className="flex items-center gap-3 border-t border-slate-200 px-4 py-3">
                  <ShieldCheck className="h-5 w-5 text-[#1c63e6]" />
                  <div className="text-[15px] text-slate-700">1 Year Onsite Warranty</div>
                </div>
                <div className="grid grid-cols-1 gap-3 border-t border-slate-200 px-4 py-4 text-center sm:grid-cols-3">
                  {featureChips.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef5ff]">
                        <Icon className="h-5 w-5 text-[#1c63e6]" />
                      </div>
                      <div className="text-[14px] leading-5 text-slate-700">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden border-t border-slate-200 pt-4">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-[18px] font-semibold text-slate-800">
                    Product highlights
                  </h2>
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#f7f7f7]">
                    <ChevronRight className="h-4 w-4 -rotate-90 text-slate-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  {highlights.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef5ff]">
                        <Icon className="h-5 w-5 text-slate-500" />
                      </div>
                      <div>
                        <div className="text-[15px] text-slate-500">{title}</div>
                        <div className="text-[15px] text-slate-800">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden border-t border-slate-200 pt-4">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-[18px] font-semibold text-slate-800">
                    All details
                  </h2>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f7f7f7]">
                    <ChevronRight className="h-4 w-4 -rotate-90 text-slate-500" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="cursor-pointer rounded-xl bg-slate-900 px-4 py-2 text-[15px] font-semibold text-white">
                    Showcase
                  </button>
                  <button className="cursor-pointer rounded-xl border border-slate-300 bg-[#fafafa] px-4 py-2 text-[15px] text-slate-700">
                    Specifications
                  </button>
                  <button className="cursor-pointer rounded-xl border border-slate-300 bg-[#fafafa] px-4 py-2 text-[15px] text-slate-700">
                    Warranty
                  </button>
                  <button className="cursor-pointer rounded-xl border border-slate-300 bg-[#fafafa] px-4 py-2 text-[15px] text-slate-700">
                    Manufacturer
                  </button>
                </div>
              </div>

              <div className="hidden grid grid-cols-1 gap-4 md:grid-cols-2">
                {overviewCards.map((card) => (
                  <div
                    key={card.title}
                    className="cursor-pointer overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="bg-[#ececec] p-2">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-[220px] w-full rounded-[14px] object-cover"
                      />
                    </div>
                    <div className="px-4 py-3">
                      <h3 className="text-[18px] font-semibold leading-6 text-slate-900">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-6 text-slate-600">
                        {expandedOverview === card.title
                          ? card.description
                          : `${card.description.slice(0, 95)}...`}
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedOverview((prev) =>
                              prev === card.title ? null : card.title
                            )
                          }
                          className="ml-1 cursor-pointer font-semibold text-[#1c63e6]"
                        >
                          {expandedOverview === card.title ? "less" : "more"}
                        </button>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden border-t border-slate-200 pt-4">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-[18px] font-semibold text-slate-800">
                    Ratings and reviews
                  </h2>
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#f7f7f7]">
                    <ChevronRight className="h-4 w-4 -rotate-90 text-slate-500" />
                  </div>
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[18px] font-semibold text-slate-900">
                    4.3
                  </span>
                  <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  <span className="rounded-md bg-[#dbf5ea] px-2 py-0.5 text-[14px] text-[#047857]">
                    Very Good
                  </span>
                </div>
                <div className="mb-4 text-[14px] text-slate-500">
                  based on 5,480 ratings by Verified Buyers
                </div>

                <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-2">
                  <img
                    src={reviewGallery[0]}
                    alt="Customer review 1"
                    className="h-[170px] w-full rounded-[12px] object-cover"
                  />
                  <div className="grid gap-2">
                    <img
                      src={reviewGallery[1]}
                      alt="Customer review 2"
                      className="h-[81px] w-full rounded-[12px] object-cover"
                    />
                    <img
                      src={reviewGallery[2]}
                      alt="Customer review 3"
                      className="h-[81px] w-full rounded-[12px] object-cover"
                    />
                  </div>
                  <div className="grid gap-2">
                    <img
                      src={reviewGallery[3]}
                      alt="Customer review 4"
                      className="h-[81px] w-full rounded-[12px] object-cover"
                    />
                    <div className="flex h-[81px] items-center justify-center rounded-[12px] bg-slate-900/85 text-[28px] font-bold text-white">
                      +186
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {scoreChips.map((chip) => (
                    <div
                      key={chip}
                      className="rounded-full bg-[#f3f8ff] px-3 py-1.5 text-[14px] text-slate-700"
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="rounded-[16px] border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#e7f8ec] px-1.5 py-0.5 text-[13px] font-semibold text-slate-800">
                          4★
                        </span>
                        <span className="text-[15px] font-semibold text-slate-800">
                          Good choice
                        </span>
                      </div>
                      <span className="text-[14px] text-slate-400">
                        6 months ago
                      </span>
                    </div>
                    <p className="text-[15px] leading-7 text-slate-700">
                      The laptop is sturdy and well built at the price point it comes s...
                      <span className="cursor-pointer font-semibold text-[#1c63e6]">more</span>
                    </p>
                    <div className="mt-4 text-[14px] text-slate-500">
                      Shrujan Rajdeep
                    </div>
                    <div className="text-[14px] text-slate-400">
                      Bronze Reviewer
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#e7f8ec] px-1.5 py-0.5 text-[13px] font-semibold text-slate-800">
                          5★
                        </span>
                        <span className="text-[15px] font-semibold text-slate-800">
                          Excellent
                        </span>
                      </div>
                      <span className="text-[14px] text-slate-400">
                        1 month ago
                      </span>
                    </div>
                    <p className="text-[15px] leading-7 text-slate-700">
                      The build quality is solid. Even though it is compact, the machine ma...
                      <span className="cursor-pointer font-semibold text-[#1c63e6]">more</span>
                    </p>
                    <div className="mt-4 text-[14px] text-slate-500">
                      Flipkart Customer
                    </div>
                    <div className="text-[14px] text-slate-400">
                      Verified Buyer
                    </div>
                  </div>
                </div>

                <button className="mt-4 w-full cursor-pointer rounded-[16px] border border-slate-300 bg-white px-4 py-3 text-[16px] font-semibold text-slate-800">
                  Show all reviews
                </button>
              </div>

              <div className="hidden sticky bottom-3 z-30 pt-2">
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/cart_page")}
                    className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-[14px] border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                  <button className="w-full max-w-[210px] cursor-pointer rounded-[14px] border border-slate-300 bg-white px-5 py-1.5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md">
                    <div className="text-[15px] font-semibold text-slate-800">
                      Buy with EMI
                    </div>
                    <div className="text-[14px] text-slate-600">
                      From <RupeeText value="4,666/m" className="h-[0.9em] w-[0.9em]" />
                    </div>
                  </button>
                  <button className="w-full max-w-[210px] cursor-pointer rounded-[14px] bg-[#ffcc00] px-5 py-3 text-[16px] font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f5c000] hover:shadow-md">
                    Buy at <RupeeText value="41,990" className="h-[0.9em] w-[0.9em]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1400px] space-y-6">
        <div className="border-t border-slate-200 pt-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold text-slate-800">
              Product highlights
            </h2>
            <button
              type="button"
              onClick={() => setShowHighlights((prev) => !prev)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#f7f7f7]"
            >
              <ChevronRight
                className={`h-4 w-4 text-slate-500 transition ${showHighlights ? "-rotate-90" : "rotate-90"
                  }`}
              />
            </button>
          </div>
          {showHighlights && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3 rounded-[18px] border border-slate-200 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef5ff]">
                    <Icon className="h-5 w-5 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-[15px] text-slate-500">{title}</div>
                    <div className="text-[15px] text-slate-800">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-slate-200 pt-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold text-slate-800">
              All details
            </h2>
            <button
              type="button"
              onClick={() => setShowAllDetails((prev) => !prev)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#f7f7f7]"
            >
              <ChevronRight
                className={`h-4 w-4 text-slate-500 transition ${showAllDetails ? "-rotate-90" : "rotate-90"
                  }`}
              />
            </button>
          </div>
          {showAllDetails && (
            <>
              <div className="flex flex-wrap gap-2">
                <button className="cursor-pointer rounded-xl bg-slate-900 px-4 py-2 text-[15px] font-semibold text-white">
                  Showcase
                </button>
                <button className="cursor-pointer rounded-xl border border-slate-300 bg-[#fafafa] px-4 py-2 text-[15px] text-slate-700">
                  Specifications
                </button>
                <button className="cursor-pointer rounded-xl border border-slate-300 bg-[#fafafa] px-4 py-2 text-[15px] text-slate-700">
                  Warranty
                </button>
                <button className="cursor-pointer rounded-xl border border-slate-300 bg-[#fafafa] px-4 py-2 text-[15px] text-slate-700">
                  Manufacturer
                </button>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {overviewCards.map((card) => (
                <div
                  key={card.title}
                  className="cursor-pointer overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="bg-[#ececec] p-2">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-[220px] w-full rounded-[14px] object-cover sm:h-[320px]"
                    />
                  </div>
                    <div className="px-4 py-3">
                      <h3 className="text-[18px] font-semibold leading-6 text-slate-900">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-6 text-slate-600">
                        {expandedOverview === card.title
                          ? card.description
                          : `${card.description.slice(0, 95)}...`}
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedOverview((prev) =>
                              prev === card.title ? null : card.title
                            )
                          }
                          className="ml-1 cursor-pointer font-semibold text-[#1c63e6]"
                        >
                          {expandedOverview === card.title ? "less" : "more"}
                        </button>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="hidden grid grid-cols-1 gap-4 md:grid-cols-2">
          {overviewCards.map((card) => (
            <div
              key={card.title}
              className="cursor-pointer overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-sm"
            >
              <div className="bg-[#ececec] p-2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[320px] w-full rounded-[14px] object-cover"
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[18px] font-semibold leading-6 text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-1 text-[15px] leading-6 text-slate-600">
                  {expandedOverview === card.title
                    ? card.description
                    : `${card.description.slice(0, 95)}...`}
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedOverview((prev) =>
                        prev === card.title ? null : card.title
                      )
                    }
                    className="ml-1 cursor-pointer font-semibold text-[#1c63e6]"
                  >
                    {expandedOverview === card.title ? "less" : "more"}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold text-slate-800">
              Ratings and reviews
            </h2>
            <button
              type="button"
              onClick={() => setShowReviews((prev) => !prev)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#f7f7f7]"
            >
              <ChevronRight
                className={`h-4 w-4 text-slate-500 transition ${showReviews ? "-rotate-90" : "rotate-90"
                  }`}
              />
            </button>
          </div>
          {showReviews && (
            <>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-[18px] font-semibold text-slate-900">4.3</span>
                <Star className="h-4 w-4 fill-green-600 text-green-600" />
                <span className="rounded-md bg-[#dbf5ea] px-2 py-0.5 text-[14px] text-[#047857]">
                  Very Good
                </span>
              </div>
              <div className="mb-4 text-[14px] text-slate-500">
                based on 5,480 ratings by Verified Buyers
              </div>

              <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr_1fr]">
                <img
                  src={reviewGallery[0]}
                  alt="Customer review 1"
                  className="h-[220px] w-full rounded-[12px] object-cover sm:h-[260px]"
                />
                <div className="grid gap-3">
                  <img
                    src={reviewGallery[1]}
                    alt="Customer review 2"
                    className="h-[180px] w-full rounded-[12px] object-cover sm:h-[124px]"
                  />
                  <img
                    src={reviewGallery[2]}
                    alt="Customer review 3"
                    className="h-[180px] w-full rounded-[12px] object-cover sm:h-[124px]"
                  />
                </div>
                <div className="grid gap-3">
                  <img
                    src={reviewGallery[3]}
                    alt="Customer review 4"
                    className="h-[180px] w-full rounded-[12px] object-cover sm:h-[124px]"
                  />
                  <div className="flex h-[120px] items-center justify-center rounded-[12px] bg-slate-900/85 text-[24px] font-bold text-white sm:h-[124px] sm:text-[28px]">
                    +186
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {scoreChips.map((chip) => (
                  <div
                    key={chip}
                    className="rounded-full bg-[#f3f8ff] px-3 py-1.5 text-[14px] text-slate-700"
                  >
                    {chip}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="rounded-[16px] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#e7f8ec] px-1.5 py-0.5 text-[13px] font-semibold text-slate-800">
                        4 Star
                      </span>
                      <span className="text-[15px] font-semibold text-slate-800">
                        Good choice
                      </span>
                    </div>
                    <span className="text-[14px] text-slate-400">6 months ago</span>
                  </div>
                  <p className="text-[15px] leading-7 text-slate-700">
                    {expandedReview === "good-choice"
                      ? "The laptop is sturdy and well built at the price point it comes with. The keyboard feels comfortable, the display is sharp, and daily work stays smooth even with multiple apps open."
                      : "The laptop is sturdy and well built at the price point it comes s..."}
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedReview((prev) =>
                          prev === "good-choice" ? null : "good-choice"
                        )
                      }
                      className="ml-1 cursor-pointer font-semibold text-[#1c63e6]"
                    >
                      {expandedReview === "good-choice" ? "less" : "more"}
                    </button>
                  </p>
                  <div className="mt-4 text-[14px] text-slate-500">Shrujan Rajdeep</div>
                  <div className="text-[14px] text-slate-400">Bronze Reviewer</div>
                </div>

                <div className="rounded-[16px] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#e7f8ec] px-1.5 py-0.5 text-[13px] font-semibold text-slate-800">
                        5 Star
                      </span>
                      <span className="text-[15px] font-semibold text-slate-800">
                        Excellent
                      </span>
                    </div>
                    <span className="text-[14px] text-slate-400">1 month ago</span>
                  </div>
                  <p className="text-[15px] leading-7 text-slate-700">
                    {expandedReview === "excellent"
                      ? "The build quality is solid. Even though it is compact, the machine manages heat well and performs reliably for browsing, office work, meetings, and light creative tasks."
                      : "The build quality is solid. Even though it is compact, the machine ma..."}
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedReview((prev) =>
                          prev === "excellent" ? null : "excellent"
                        )
                      }
                      className="ml-1 cursor-pointer font-semibold text-[#1c63e6]"
                    >
                      {expandedReview === "excellent" ? "less" : "more"}
                    </button>
                  </p>
                  <div className="mt-4 text-[14px] text-slate-500">Flipkart Customer</div>
                  <div className="text-[14px] text-slate-400">Verified Buyer</div>
                </div>
              </div>

              <button className="mt-4 w-full cursor-pointer rounded-[16px] border border-slate-300 bg-white px-4 py-3 text-[16px] font-semibold text-slate-800">
                Show all reviews
              </button>
            </>
          )}
        </div>

        <div className="sticky bottom-3 z-30 pt-2">
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
            <button className="w-full cursor-pointer rounded-[14px] bg-[#ffcc00] px-5 py-3 text-[16px] font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f5c000] hover:shadow-md sm:flex-1">
              Buy at <RupeeText value="41,990" className="h-[0.9em] w-[0.9em]" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Product;
