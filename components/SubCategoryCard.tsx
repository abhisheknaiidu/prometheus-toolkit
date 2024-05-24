import { Subcategory } from "@/type";
import Modal from "./Modal";

const SubCategoryCard: React.FC<{ subcategory: Subcategory }> = ({
  subcategory,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow relative min-h-[220px]">
      <h4 className="text-[14px] text-[#475569] font-bold mb-4 flex items-center leading-[14px]">
        <img src={subcategory.icon} alt="Icon" className="mr-2 w-6 h-6" />
        {subcategory.text}
      </h4>
      <p className="text-gray-600 mb-4">{subcategory.description}</p>

      <Modal subcategory={subcategory} />
    </div>
  );
};

export default SubCategoryCard;
