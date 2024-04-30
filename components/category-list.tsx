import { db } from "@/lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
    const categories = await db.category.findMany({});
    return (
    <div className=" grid grid-cols-3 gap-3">
    {categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
    ))}
    </div>
    );
};
 
export default CategoryList;