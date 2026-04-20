import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Product_list = () => {

    useEffect(() => {
    AOS.init({
      duration: 900, // global animation duration
      once: true      // animation only once
    });
  }, []);

  const navigate = useNavigate();
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Product data used for rendering the grid and brand filtering.
  const products = [
    {
      id: 1,
      name: "Dell 15, Intel Core 3 14th Gen-100U, 16GB DDR4, 512GB SSD, FHD IPS, 15.6/39.62cm, Windows 11",
      price: 55000,
      discount: "15% Off",
      image: "11.jpg",
      brand: "Dell",
      rating: 4,
      taxInfo: "Inclusive of all taxes",
    },
    {
      id: 2,
      name: "HP Gaming Laptop",
      price: 75000,
      discount: "10% Off",
      image: "2.jpg",
      brand: "HP",
      rating: 5,
      taxInfo: "Inclusive of all taxes",
    },
    {
      id: 3,
      name: "Logitech Mouse",
      price: 999,
      discount: "20% Off",
      image: "3.jpg",
      brand: "Logitech",
      rating: 4,
      taxInfo: "GST invoice available",
    },
    {
      id: 4,
      name: "HP 15 (2026), AMD Athlon Dual Core 7120U - (8 GB DDR5/512 GB SSD/AMD Radeon 610M Graphics/Windows 11 Pro)",
      price: 2999,
      discount: "18% Off",
      image: "4.jpg",
      brand: "Zebronics",
      rating: 4,
      taxInfo: "GST included in price",
    },
    {
      id: 5,
      name: "Samsung Monitor",
      price: 12000,
      discount: "12% Off",
      image: "15.jpg",
      brand: "Samsung",
      rating: 5,
      taxInfo: "Inclusive of all taxes",
    },
    {
      id: 6,
      name: "SSD 512GB",
      price: 4500,
      discount: "8% Off",
      image: "6.jpg",
      brand: "SanDisk",
      rating: 4,
      taxInfo: "GST invoice available",
    },
    {
      id: 7,
      name: "Asus VivoBook Laptop",
      price: 62000,
      discount: "14% Off",
      image: "11.jpg",
      brand: "Asus",
      rating: 4,
      taxInfo: "Inclusive of all taxes",
    },
    {
      id: 8,
      name: "Lenovo ThinkPad Laptop",
      price: 68000,
      discount: "16% Off",
      image: "2.jpg",
      brand: "Lenovo",
      rating: 5,
      taxInfo: "Inclusive of all taxes",
    },
    {
      id: 9,
      name: "Wireless Gaming Mouse",
      price: 1499,
      discount: "22% Off",
      image: "3.jpg",
      brand: "Logitech",
      rating: 4,
      taxInfo: "GST included in price",
    },
    {
      id: 10,
      name: "RGB Mechanical Keyboard",
      price: 3499,
      discount: "17% Off",
      image: "4.jpg",
      brand: "Zebronics",
      rating: 5,
      taxInfo: "GST included in price",
    },
    {
      id: 11,
      name: "LG UltraWide Monitor",
      price: 18500,
      discount: "9% Off",
      image: "15.jpg",
      brand: "LG",
      rating: 4,
      taxInfo: "Inclusive of all taxes",
    },
    {
      id: 12,
      name: "Portable SSD 1TB",
      price: 7999,
      discount: "11% Off",
      image: "6.jpg",
      brand: "SanDisk",
      rating: 5,
      taxInfo: "GST invoice available",
    },
    {
      id: 13,
      name: "Apple MacBook Air",
      price: 92000,
      discount: "7% Off",
      image: "11.jpg",
      brand: "Apple",
      rating: 5,
      taxInfo: "Inclusive of all taxes",
    },
    {
      id: 14,
      name: "Acer Predator Laptop",
      price: 88000,
      discount: "13% Off",
      image: "2.jpg",
      brand: "Acer",
      rating: 4,
      taxInfo: "Inclusive of all taxes",
    },
    {
      id: 15,
      name: "Ergonomic Wireless Mouse",
      price: 1299,
      discount: "19% Off",
      image: "3.jpg",
      brand: "Dell",
      rating: 4,
      taxInfo: "GST included in price",
    },
    {
      id: 16,
      name: "Compact Office Keyboard",
      price: 1999,
      discount: "21% Off",
      image: "4.jpg",
      brand: "HP",
      rating: 3,
      taxInfo: "GST included in price",
    },
  ];

  const lowestPrice = Math.min(...products.map((product) => product.price));
  const highestPrice = Math.max(...products.map((product) => product.price));
  const [minPrice, setMinPrice] = useState(lowestPrice);
  const [maxPrice, setMaxPrice] = useState(highestPrice);

  // Brand options shown in the filter sidebar.
  const brands = ["Lenovo", "Dell", "HP", "Zebronics"];

  // Toggle a brand in the selected filter list.
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleProductClick = (productId) => {
    navigate("/product_details", { state: { productId } });
  };

  // Show products filtered by selected brands and the current price range.
  const filteredProducts = products
    .filter((product) => {
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      return (
        matchesBrand &&
        product.price >= minPrice &&
        product.price <= maxPrice
      );
    })
    .sort((a, b) => {
      if (sortBy === "price-low-high") return a.price - b.price;
      if (sortBy === "price-high-low") return b.price - a.price;
      if (sortBy === "name-a-z") return a.name.localeCompare(b.name);
      if (sortBy === "name-z-a") return b.name.localeCompare(a.name);
      return 0;
    });

  const productsPerPage = 8;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrands, minPrice, maxPrice, sortBy]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-4 sm:py-6 lg:px-6">
      <div className="w-full">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-center text-2xl font-bold sm:text-left">Products</h2>

          <div className="inline-flex flex-col gap-2 self-start px-0 py-0 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-3 sm:self-auto sm:rounded-xl sm:px-4 sm:py-3">
            <label htmlFor="sort-products" className="text-xs font-semibold text-gray-800 sm:text-base">
              Sort by
            </label>
            <select
              id="sort-products"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="min-w-[145px] rounded-lg border border-gray-400 bg-white px-3 py-1.5 text-xs text-gray-800 outline-none focus:border-[#113768CC] sm:min-w-[210px] sm:px-4 sm:py-2 sm:text-base"
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-6 lg:items-start" data-aos="fade-up">
          {/* Sticky brand filter sidebar */}
          <aside className="lg:sticky lg:top-6">
            <button
              type="button"
              onClick={() => setShowMobileFilters((prev) => !prev)}
              className="mb-3 inline-flex self-start rounded-lg bg-[#113768CC] px-4 py-2 text-sm font-semibold text-white lg:hidden"
            >
              {showMobileFilters ? "Hide Filters" : "Show Filters"}
            </button>

            <div
              className={`rounded-xl bg-white p-4 shadow sm:p-5 ${
                showMobileFilters ? "block" : "hidden"
              } lg:block`}
            >
              <p className="mb-3 text-sm font-semibold text-gray-700">Filter by brand</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-1 lg:gap-3">
                {brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex min-w-0 cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-[#113768CC] hover:text-[#113768CC]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="h-4 w-4 cursor-pointer accent-[#113768CC]"
                    />
                    <span className="truncate">{brand}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-gray-700">Filter by price</p>
                  <div className="flex items-center justify-between gap-2 sm:justify-end">
                    <span className="text-sm font-bold text-[#113768CC]">
                      {"\u20B9"}
                      {minPrice} - {"\u20B9"}
                      {maxPrice}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setMinPrice(lowestPrice);
                        setMaxPrice(highestPrice);
                      }}
                      className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 transition hover:border-[#113768CC] hover:text-[#113768CC]"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="relative px-1 py-4">
                  <div className="absolute left-1 right-1 top-1/2 h-2 -translate-y-1/2 rounded-full bg-gray-200" />
                  <div
                    className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#113768CC]"
                    style={{
                      left: `${((minPrice - lowestPrice) / (highestPrice - lowestPrice)) * 100}%`,
                      right: `${100 - ((maxPrice - lowestPrice) / (highestPrice - lowestPrice)) * 100}%`,
                    }}
                  />

                  <input
                    type="range"
                    min={lowestPrice}
                    max={highestPrice}
                    value={minPrice}
                    onChange={(event) =>
                      setMinPrice(Math.min(Number(event.target.value), maxPrice))
                    }
                    className="pointer-events-none absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#113768CC] [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#113768CC] [&::-moz-range-thumb]:bg-white"
                  />

                  <input
                    type="range"
                    min={lowestPrice}
                    max={highestPrice}
                    value={maxPrice}
                    onChange={(event) =>
                      setMaxPrice(Math.max(Number(event.target.value), minPrice))
                    }
                    className="pointer-events-none absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#113768CC] [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#113768CC] [&::-moz-range-thumb]:bg-white"
                  />
                </div>

                <div className="mt-3 flex justify-between text-xs text-gray-500">
                  <span>
                    {"\u20B9"}
                    {lowestPrice}
                  </span>
                  <span>
                    {"\u20B9"}
                    {highestPrice}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product card grid */}
          <div>
            <div className="grid grid-cols-2 gap-3 cursor-pointer sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
              {paginatedProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleProductClick(p.id)}
                  className="group flex h-full flex-col rounded-xl bg-white p-3 text-center shadow transition hover:shadow-lg" data-aos="fade-up"
                >
                  <div className="flex items-start justify-end">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleWishlist(p.id);
                      }}
                      aria-label={
                        wishlist.includes(p.id)
                          ? `Remove ${p.name} from wishlist`
                          : `Add ${p.name} to wishlist`
                      }
                      className={`text-4xl leading-none transition cursor-pointer ${
                        wishlist.includes(p.id)
                          ? "text-red-500"
                          : "text-gray-400 hover:text-red-500"
                      }`}
                    >
                      {wishlist.includes(p.id) ? "\u2665" : "\u2661"}
                    </button>
                  </div>

                  <div className="flex h-36 items-center justify-center overflow-hidden rounded p-2 sm:h-32 lg:h-40">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="mt-2 font-semibold text-lg">{p.name}</h3>
                    <div className="mt-1 flex items-center justify-center gap-2">
                      <p className="font-bold text-[#113768CC]">
                        {"\u20B9"}
                        {p.price}
                      </p>
                      <span className="h-4 w-px bg-gray-600" />
                      <p className="text-sm font-bold text-red-500">{p.discount}</p>
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-1 text-lg">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span
                          key={`${p.id}-star-${index}`}
                          className={
                            index < p.rating ? "text-amber-400" : "text-gray-300"
                          }
                        >
                          {"\u2605"}
                        </span>
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{p.taxInfo}</p>
                  </div>

                  <button
                    type="button"
                    onClick={(event) => event.stopPropagation()}
                    className="mt-3 w-full self-center rounded-full bg-[#113768CC] py-2 text-white transition hover:bg-blue-950 sm:w-60"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-[#113768CC] hover:text-[#113768CC] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;

                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`h-10 w-10 rounded-lg text-sm font-semibold transition ${
                      currentPage === pageNumber
                        ? "bg-[#113768CC] text-white"
                        : "border border-gray-300 bg-white text-gray-700 hover:border-[#113768CC] hover:text-[#113768CC]"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-[#113768CC] hover:text-[#113768CC] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_list;
