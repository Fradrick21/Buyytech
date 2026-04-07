import { useEffect } from "react";
import toast from "react-hot-toast";

const OFFER_TOAST_ID = "offer-toast";
const OFFER_REFRESH_KEY = "offer-refresh-count";
const OFFER_SESSION_KEY = "offer-session-started";
let hasHandledCurrentLoad = false;

const ShowOfferToast = () => {
  useEffect(() => {
    if (hasHandledCurrentLoad) {
      return;
    }

    hasHandledCurrentLoad = true;

    const isFirstSessionLoad = !sessionStorage.getItem(OFFER_SESSION_KEY);
    const refreshCount = Number(sessionStorage.getItem(OFFER_REFRESH_KEY) || 0);
    const shouldShowOffer = isFirstSessionLoad || refreshCount % 5 === 0;

    sessionStorage.setItem(OFFER_SESSION_KEY, "true");
    sessionStorage.setItem(OFFER_REFRESH_KEY, String(refreshCount + 1));

    if (!shouldShowOffer) {
      return undefined;
    }

    toast.dismiss(OFFER_TOAST_ID);

    toast.custom(
      (t) => (
        <div
          className="relative w-[380px] overflow-hidden rounded-2xl shadow-2xl"
          style={{
            opacity: t.visible ? 1 : 0,
            transform: t.visible
              ? "translateY(0) scale(1)"
              : "translateY(18px) scale(0.96)",
            transition:
              "opacity 420ms cubic-bezier(0.22, 1, 0.36, 1), transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "opacity, transform",
          }}
        >
          <button
            type="button"
            onClick={() => toast.dismiss(t.id)}
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-black/45 text-xl font-semibold leading-none text-white shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-black/65 active:scale-95"
            aria-label="Close offer popup"
          >
            {"\u2715"}
          </button>

          <img
            src="pop.png"
            alt="Special sale offer banner"
            className="block h-auto w-full object-cover"
          />
        </div>
      ),
      {
        id: OFFER_TOAST_ID,
        duration: Infinity,
        removeDelay: 500,
      }
    );
  }, []);

  return null;
};

export default ShowOfferToast;
