import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { categories } from "@/data/category";
import SubCategoryCard from "@/components/SubCategoryCard";
import CategoryList from "@/components/CategoryList";
import { Subcategory } from "@/type";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);

  React.useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = categories
      .map((category) => {
        const filteredSubcategories = Object.keys(category.subcategories)
          .filter((subcategoryKey) =>
            category.subcategories[subcategoryKey].text
              .toLowerCase()
              .includes(term)
          )
          .reduce((acc, key) => {
            acc[key] = category.subcategories[key];
            return acc;
          }, {} as Record<string, Subcategory>);

        return { ...category, subcategories: filteredSubcategories };
      })
      .filter((category) => Object.keys(category.subcategories).length > 0);

    setFilteredCategories(filtered);
  }, [searchTerm, categories]);

  return (
    <div className={inter.className}>
      <header className="bg-white shadow">
        <div className="container mx-auto md:max-w-[1280px] px-10 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/icons/header_logo.png"
              alt="Logo"
              className="max-w-[123px] max-h-[72px]"
            />
          </div>
        </div>
      </header>
      <main className="container md:max-w-[1280px] mx-auto px-4 md:px-10 pt-12 pb-4">
        <h2 className="text-[20px] font-semibold leading-7 text-[#475569] mb-4">
          Browse Library
        </h2>
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a component"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <section>
          <CategoryList data={filteredCategories} />
        </section>
      </main>
    </div>
  );
}
