import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Arun Kumar",
    rating: 5,
    message: "Excellent service! The project was delivered on time.",
    date: "March 25, 2026",
  },
  {
    name: "Priya Sharma",
    rating: 4,
    message: "Good quality work, very professional team.",
    date: "March 20, 2026",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    message: "Highly recommended! Smooth experience from start to finish.",
    date: "March 15, 2026",
  },
  {
    name: "Sneha Patel",
    rating: 5,
    message: "Beautiful packaging and very fast delivery. Everything arrived exactly as shown.",
    date: "March 11, 2026",
  },
  {
    name: "Vikram Singh",
    rating: 4,
    message: "Support team was helpful and quick to answer my questions before I placed the order.",
    date: "March 8, 2026",
  },
  {
    name: "Neha Reddy",
    rating: 5,
    message: "The entire shopping experience felt premium. I will definitely order again.",
    date: "March 2, 2026",
  },
  {
    name: "Karan Mehta",
    rating: 5,
    message: "Very reliable service with great product quality and timely updates throughout the order.",
    date: "February 27, 2026",
  },
];

const ReviewCard = ({ review }) => {
  const initials = review.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400" />
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange-100/60 blur-2xl transition duration-300 group-hover:bg-orange-200/70" />

      <div className="relative mb-5 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-sm font-bold tracking-[0.2em] text-white shadow-lg">
            {initials}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">{review.name}</h3>
            <p className="text-sm text-slate-500">{review.date}</p>
          </div>
        </div>

        <div className="w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700 shadow-sm">
          {review.rating}.0/5
        </div>
      </div>

      <div className="relative mb-4 flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < review.rating
                ? "fill-amber-400 text-amber-400"
                : "text-slate-200"
            }
          />
        ))}
        <span className="ml-2 text-sm font-medium text-slate-500">
          Verified review
        </span>
      </div>

      <div className="relative rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
        <span className="mb-3 block text-4xl font-serif leading-none text-orange-300">
          "
        </span>
        <p className="-mt-4 text-sm leading-7 text-slate-600">
          {review.message}
        </p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const sliderRef = useRef(null);

  const scrollCards = (direction = 1) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstCard = slider.querySelector("[data-review-slide]");
    const cardWidth = firstCard ? firstCard.clientWidth : slider.clientWidth / 5;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const nextPosition = slider.scrollLeft + scrollAmount * direction;

    slider.scrollTo({
      left:
        direction > 0 && nextPosition >= maxScrollLeft - 4
          ? 0
          : direction < 0 && slider.scrollLeft <= 4
            ? maxScrollLeft
            : nextPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      scrollCards(1);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full bg-white px-3 py-6 sm:px-4 md:px-6">
      <div className="relative mb-6 flex flex-col items-center gap-4">
        <div className="text-center">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
            Customer Reviews
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
          <button
            type="button"
            onClick={() => scrollCards(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-orange-300 hover:text-orange-600"
            aria-label="Scroll reviews left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollCards(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-orange-300 hover:text-orange-600"
            aria-label="Scroll reviews right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-3 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-4 md:gap-6"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            data-review-slide
            className="min-w-full sm:min-w-[48%] md:min-w-[31%] lg:min-w-[18.4%]"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
