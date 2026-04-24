import { useState } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);
  const [deliveryHover, setDeliveryHover] = useState(0);
  const [form, setForm] = useState({
    description: "",
  });

  const ratingLabel = (value) => {
    switch (value) {
      case 1:
        return "Bad";
      case 2:
        return "Average";
      case 3:
        return "Can improve";
      case 4:
        return "Good";
      case 5:
        return "Excellent";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      rating,
      deliveryRating,
      ...form,
    };

    console.log("Review Data:", data);
    alert("Review Submitted");

    // Reset
    setRating(0);
    setDeliveryRating(0);
    setHover(0);
    setDeliveryHover(0);
    setForm({ description: "" });
  };

  return (
    <div className="w-full max-w-[720px] rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
      <h2 className="mb-5 text-2xl font-bold text-slate-900">
        Write a Review
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <p className="mb-2 text-base font-semibold text-slate-800">
            Product rating
          </p>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`cursor-pointer text-[1.9rem] leading-none transition duration-150 hover:scale-105 ${
                  star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                aria-label={`Rate product ${star} out of 5`}
              >
                {"\u2605"}
              </button>
            ))}
          </div>
          {ratingLabel(hover || rating) && (
            <p className="mt-2 inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-semibold tracking-wide text-slate-800 shadow-sm">
              {ratingLabel(hover || rating)}
            </p>
          )}
        </div>

        <textarea
          placeholder="Write about the product..."
          className="min-h-[110px] w-full rounded-xl border border-blue-200 bg-white p-3 text-base text-slate-800 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <div className="mb-4">
          <p className="mb-2 text-base font-semibold text-slate-800">
            Delivery rating
          </p>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`cursor-pointer text-[1.9rem] leading-none transition duration-150 hover:scale-105 ${
                  star <= (deliveryHover || deliveryRating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setDeliveryRating(star)}
                onMouseEnter={() => setDeliveryHover(star)}
                onMouseLeave={() => setDeliveryHover(0)}
                aria-label={`Rate delivery ${star} out of 5`}
              >
                {"\u2605"}
              </button>
            ))}
          </div>
          {ratingLabel(deliveryHover || deliveryRating) && (
            <p className="mt-2 inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-semibold tracking-wide text-slate-800 shadow-sm">
              {ratingLabel(deliveryHover || deliveryRating)}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
