import { Itype } from "@/type";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";

const ProductPriceSection = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product prices");
  }

  const result = await res.json();
  const data: Itype[] = Array.isArray(result) ? result : (result.data ?? []);

  const increasedProducts = data.filter((item) => item.change.dir === "up");

  const decreasedProducts = data.filter((item) => item.change.dir === "down");

  const renderProducts = (products: Itype[]) => (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => {
        const isUp = item.change.dir === "up";
        const isDown = item.change.dir === "down";

        return (
          <div
            key={item.id}
            className="rounded-xl border border-gray-200 bg-white/80 p-3 transition-shadow hover:shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
                {item.image}
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-gray-800">{item.nameBn}</h3>
                <p className="text-xs text-gray-500">প্রতি {item.unit}</p>
              </div>
            </div>

            <div className="mt-3 flex items-end justify-between gap-2">
              <div>
                <p className="text-xs text-gray-500">আজকের দাম</p>
                <p className="mt-0.5 font-bold text-gray-900">
                  {Number(item.today).toLocaleString("bn-BD")} টাকা
                </p>
              </div>

              <span
                className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                  isUp
                    ? "bg-red-50 text-red-600"
                    : isDown
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                {isUp ? (
                  <IoCaretUpSharp />
                ) : isDown ? (
                  <IoCaretDownSharp />
                ) : (
                  <span>—</span>
                )}
                {item.change.pct}%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="bg-[#f1f6f1] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Products with Increased Prices */}
        {increasedProducts.length > 0 && (
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-base font-bold text-gray-800">
              <IoCaretUpSharp className="text-red-500" />
              আজ দাম বেড়েছে
            </h2>

            {renderProducts(increasedProducts)}
          </div>
        )}

        {/* Products with Decreased Prices */}
        {decreasedProducts.length > 0 && (
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-base font-bold text-gray-800">
              <IoCaretDownSharp className="text-green-600" />
              আজ দাম কমেছে
            </h2>

            {renderProducts(decreasedProducts)}
          </div>
        )}

        {/* All Products - Added at the Bottom */}
        {data.length > 0 && (
          <div>
            <h2 className="mb-1 text-base font-bold text-gray-800">সব পণ্য</h2>

            <p className="mb-3 text-xs text-gray-500">
              মোট {data.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
            </p>

            {renderProducts(data)}
          </div>
        )}

        {/* Empty State */}
        {data.length === 0 && (
          <p className="py-10 text-center text-gray-500">
            কোনো পণ্যের তথ্য পাওয়া যায়নি।
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductPriceSection;
