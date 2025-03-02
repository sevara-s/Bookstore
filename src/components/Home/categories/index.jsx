import React from "react";
import { useCategories } from "../../../api/categoryApi";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/categorySlice";
import Loader from "../../Loader";

const CategoryList = () => {
  const { data: categories, isLoading, error } = useCategories();
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  if (!categories || categories.length === 0)
    return <p className="text-center text-gray-400">No categories available.</p>;

  return (
    <section className="categories pt-[50px] bg-[#191919]">
      <div className="container">
        <h1 className="mainC text-center font-[400] text-[31px] text-[#c9ac8c]">
          Asosiy kategoriyalar
        </h1>

        <div className="all_categories flex items-center justify-center gap-[35px] p-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`!text-[20px] opacity-60 ${
                selectedCategory === cat.id
                  ? "!text-[#c9ac8c]"
                  : "!text-[white]"
              }`}
              onClick={() => dispatch(setCategory(cat.id))}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
