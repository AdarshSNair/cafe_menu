"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categories = ({products,setCat}) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const handleTags = (item) => {
    router.push(`${pathName}?category=${item}`);
    setCat(item)
  };
  return (
    <>
      <div className="flexBetween w-full gap-5 flex-wrap">
        <ul className="flex gap-2 overflow-auto">
          {products?.map((categories) => (
            <button
              key={categories.menu_category_id}
              type="button"
              onClick={() => handleTags(categories.menu_category)}
              className={`${category === categories.menu_category
                ? "bg-red-600 font-medium text-white"
                : "font-normal"
                } px-4 py-3 rounded-lg capitalize whitespace-nowrap`}
            >
              {categories.menu_category}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;