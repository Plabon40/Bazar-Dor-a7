import Link from "next/link";

const Navlinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data = await res.json();

  return (
    <div className="mt-3">
      {data.map((c: { id: number; icon: string; nameBn: string }) => {
        return (
          <Link
            className="text-[15px] hover:bg-gray-300 px-3 py-[5px] rounded-[10px] "
            href=""
            key={c.id}
          >
            <span className="text-[15px] ">{c.icon}</span>
            <span className="text-[15px] ">{c.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
