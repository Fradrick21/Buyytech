import {
  ChevronRight,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import { Link } from "react-router-dom";

import googlePlayBadge from "../assets/google-play-badge.jpeg";
import appStoreBadge from "../assets/app-store-badge.jpeg";

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Careers", href: "#" },
  { label: "Latest News", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "/privacy" },
];

const accountLinks = [
  { label: "Your Account", href: "/myaccount" },
  { label: "Return Policies", href: "#" },
  { label: "Become a Vendor", href: "#" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Affiliate Program", href: "#" },
  { label: "FAQs", href: "/faq" },
];

const categoryLinks = [
  { label: "Healthcare", href: "/product" },
  { label: "Fashion", href: "/product" },
  { label: "Organic", href: "/product" },
  { label: "Beauty", href: "/product" },
  { label: "Groceries", href: "/product" },
  { label: "Fashion", href: "/product" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "2715 Ash Dr. San Jose, South Dakota 83475",
    href: "https://maps.google.com/?q=2715+Ash+Dr.+San+Jose,+South+Dakota+83475",
  },
  {
    icon: Phone,
    text: "Call Us: (239) 555-0108",
    href: "tel:+12395550108",
  },
  {
    icon: Mail,
    text: "sara.cruz@example.com",
    href: "mailto:sara.cruz@example.com",
  },
  {
    icon: Printer,
    text: "sara.cruz@example.com",
    href: "mailto:sara.cruz@example.com",
  },
];

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.024 4.388 11.018 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.235 2.686.235v2.962h-1.513c-1.491 0-1.956.931-1.956 1.887v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.091 24 18.097 24 12.073Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.94 1.31a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Z" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.66a11.83 11.83 0 0 0 5.73 1.46h.01c6.55 0 11.88-5.33 11.88-11.89 0-3.18-1.24-6.17-3.41-8.43ZM12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.74.98 1-3.65-.23-.37a9.86 9.86 0 0 1-1.52-5.29C2.2 6.44 6.6 2.03 12.05 2.03c2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.87 6.95c0 5.46-4.4 9.9-9.8 9.94Zm5.42-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.16-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.47a8.82 8.82 0 0 1-1.64-2.04c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.62.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.28.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.24l-4.9-7.4L5.57 22H2.46l7.24-8.27L.8 2h6.4l4.43 6.76L18.9 2Zm-1.09 18.13h1.72L6.26 3.78H4.42l13.39 16.35Z" />
    </svg>
  );
}

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { name: "WhatsApp", href: "https://whatsapp.com", icon: WhatsAppIcon },
  { name: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
];

const paymentBadges = [
  {
    label: "VISA",
    bg: "bg-[#1A1F71]",
    text: "text-white",
    wide: "w-[52px] sm:w-[60px]",
    href: "https://www.visa.com/",
  },
  {
    label: "Master",
    bg: "bg-[#F79E1B]",
    text: "text-white",
    wide: "w-[52px] sm:w-[60px]",
    href: "https://www.mastercard.com/",
  },
  {
    label: "AM EX",
    bg: "bg-[#2E77BC]",
    text: "text-white",
    wide: "w-[54px] sm:w-[62px]",
    href: "https://www.americanexpress.com/",
  },
  {
    label: "PayPal",
    bg: "bg-[#179BD7]",
    text: "text-white",
    wide: "w-[52px] sm:w-[60px]",
    href: "https://www.paypal.com/",
  },
  {
    label: "Pay",
    bg: "bg-[#2B2B2B]",
    text: "text-white",
    wide: "w-[58px] sm:w-[70px]",
    href: "https://www.apple.com/apple-pay/",
  },
];

function LinkColumn({ title, items }) {
  return (
    <div className="pt-2 sm:pt-3">
      <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-[#e7fff8] sm:text-[18px]">
        {title}
      </h3>

      <div className="mt-5 h-px w-full bg-white/20 sm:mt-7" />

      <ul className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const href = typeof item === "string" ? "#" : item.href;
          const content = (
            <>
              <ChevronRight className="h-4 w-4 shrink-0" />
              <span className="decoration-[#bff6ee] underline-offset-4 group-hover:underline">
                {label}
              </span>
            </>
          );

          if (href && href !== "#") {
            return (
              <li key={label} className="group text-[14px] font-medium text-white/95 transition hover:translate-x-1 hover:text-[#bff6ee] sm:text-[15px]">
                <Link to={href} className="flex items-center gap-3">
                  {content}
                </Link>
              </li>
            );
          }

          return (
            <li
              key={label}
              className="group flex cursor-pointer items-center gap-3 text-[14px] font-medium text-white/95 transition hover:translate-x-1 hover:text-[#bff6ee] sm:text-[15px]"
            >
              {content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative mt-12 w-full bg-transparent text-white sm:mt-16">
      <div className="w-full overflow-hidden bg-[#113768cc]">
        <div className="relative z-10 bg-white px-4 pb-[80px] pt-12 text-center sm:px-6 sm:pb-[100px] sm:pt-14 md:px-12 md:pb-[120px] md:pt-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-[24px] font-bold text-[#10233f] sm:text-[30px] md:text-[42px]">
              Subscribe to our newsletter
            </h2>

            <p className="mx-auto mt-4 max-w-[330px] text-[13px] leading-6 text-slate-400 sm:max-w-2xl md:text-[14px]">
              Stay updated! Subscribe to our mailing list for news, updates, and
              exclusive offers.
            </p>

            <div className="mx-auto mt-6 flex w-full max-w-[340px] items-center rounded-full border border-slate-300 bg-white p-1.5 shadow-md sm:mt-8 sm:max-w-[420px] md:max-w-[500px]">
              <div className="flex min-w-0 flex-1 items-center gap-2 pl-4 pr-2">
                <Mail className="h-4 w-4 shrink-0 text-[#183153]" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full min-w-0 bg-transparent text-[13px] text-slate-700 outline-none placeholder:text-slate-500"
                />
              </div>

              <button className="shrink-0 rounded-full bg-[#113768] px-5 py-3 text-[12px] font-semibold text-white transition hover:bg-[#0d2d54] sm:px-6 sm:text-[13px]">
                Subscribe
              </button>
            </div>
          </div>

          <svg
            className="pointer-events-none absolute bottom-0 left-0 h-[46px] w-full sm:h-[56px] md:h-[66px]"
            viewBox="0 0 1440 66"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 0H390C410 0 426 11 434 24C450 53 497 62 575 62H865C943 62 990 53 1006 24C1014 11 1030 0 1050 0H1440V66H0V0Z"
              fill="#113768cc"
            />
          </svg>
        </div>

        <div className="px-4 pb-10 pt-10 sm:px-6 md:px-10 lg:px-14">
          <div className="mx-auto grid w-full max-w-[1580px] grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.26fr_.82fr_.82fr_.82fr_1.18fr] lg:gap-16">
            <div className="pt-1">
              <img
                src="logo.png"
                alt="Sellzy"
                className="mb-6 h-auto w-[120px] object-contain sm:mb-7 sm:w-[140px] md:w-[150px]"
              />

              <p className="max-w-[380px] text-[14px] leading-[1.7] text-white/95 sm:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#113768cc] sm:h-11 sm:w-11"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}

                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#113768cc] sm:h-11 sm:w-11">
                  <span className="text-sm font-semibold sm:text-base">Be</span>
                </button>
              </div>

              <h4 className="mt-7 text-[17px] font-semibold text-[#e7fff8] sm:mt-8 sm:text-[18px]">
                Download Our App:
              </h4>

              <div className="mt-4 flex items-center justify-center gap-3 px-4 sm:mt-5 sm:px-6">
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  className="h-[42px] w-auto shrink-0 object-contain sm:h-[48px]"
                />
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-[42px] w-auto shrink-0 object-contain sm:h-[48px]"
                />
              </div>
            </div>

            <LinkColumn title="About" items={aboutLinks} />
            <LinkColumn title="My Account" items={accountLinks} />
            <LinkColumn title="Categories" items={categoryLinks} />

            <div className="pt-2 sm:pt-3">
              <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-[#e7fff8] sm:text-[18px]">
                Contact Information
              </h3>

              <div className="mt-5 h-px w-full bg-white/20 sm:mt-7" />

              <div className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">
                {contactInfo.map(({ icon: Icon, text, href }, index) => (
                  <a
                    key={`${text}-${index}`}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex cursor-pointer items-start gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 sm:h-11 sm:w-11">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <p className="cursor-pointer pt-1 text-[14px] font-medium leading-6 text-white/95 sm:pt-2 sm:text-[15px] sm:leading-7">
                      {text}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-nowrap items-center gap-1.5 overflow-x-auto pb-1 sm:mt-7 sm:gap-2">
                {paymentBadges.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className={`${item.bg} ${item.text} ${item.wide} flex h-[30px] shrink-0 cursor-pointer items-center justify-center rounded-[2px] px-1.5 text-[10px] font-bold tracking-[0.01em] shadow-sm sm:h-[32px] sm:px-2 sm:text-[11px]`}
                  >
                    {item.label === "Master" ? (
                      <div className="flex items-center">
                        <span className="h-4 w-4 rounded-full bg-[#EB001B] sm:h-5 sm:w-5" />
                        <span className="-ml-1.5 h-4 w-4 rounded-full bg-[#F79E1B] sm:h-5 sm:w-5" />
                      </div>
                    ) : item.label === "PayPal" ? (
                      <span className="text-[12px] font-extrabold italic tracking-[-0.04em] sm:text-[13px]">
                        P
                      </span>
                    ) : item.label === "Pay" ? (
                      <span className="flex items-center gap-1 font-semibold">
                        <span className="text-[9px] leading-none sm:text-[10px]">
                          Apple
                        </span>
                        <span>Pay</span>
                      </span>
                    ) : item.label === "AM EX" ? (
                      <span className="text-center text-[9px] font-extrabold leading-[0.95] sm:text-[10px]">
                        AM
                        <br />
                        EX
                      </span>
                    ) : (
                      <span
                        className={
                          item.label === "VISA"
                            ? "text-[11px] font-extrabold italic tracking-[-0.03em] sm:text-[12px]"
                            : ""
                        }
                      >
                        {item.label}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/15 pt-6 sm:mt-10 sm:pt-7">
            <div className="mx-auto flex w-full max-w-[1580px] items-center justify-center gap-4">
              <p className="flex-1 text-center text-[12px] font-medium leading-6 text-white sm:text-[14px]">
                2026 Copyright By Themeforest
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                Powered By Createuiux
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#113768] text-white shadow-lg transition hover:bg-[#0d2d54] sm:bottom-6 sm:right-6 sm:h-11 sm:w-11"
      >
        <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </footer>
  );
}

export default Footer;
