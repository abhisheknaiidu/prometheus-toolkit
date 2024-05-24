import { Category } from "@/type";
import SubCategoryCard from "./SubCategoryCard";

const CategoryList: React.FC<{ data: Category[] }> = ({ data }) => (
  <div>
    {data.map((category) => (
      <div key={category.key}>
        <h3 className="text-[11px] leading-4 font-bold tracking-[1px] mb-4 uppercase text-[#94A3B8]">
          {category.text}{" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.keys(category.subcategories).map((subcategoryKey) => {
            const subcategory = category.subcategories[subcategoryKey];
            return (
              <SubCategoryCard
                key={subcategory.key}
                subcategory={subcategory}
              />
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

export default CategoryList;
