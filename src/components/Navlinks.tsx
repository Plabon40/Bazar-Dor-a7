import Link from "next/link";

const Navlinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result = await res.json();

  const data = Array.isArray(result) ? result : (result.data ?? []);

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {data.map((item: any) => (
        <Link
          key={item.id}
          href={`/category/${item.id}`}
          className="text-sm font-medium text-gray-700 hover:text-green-700"
        >
          {item.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
