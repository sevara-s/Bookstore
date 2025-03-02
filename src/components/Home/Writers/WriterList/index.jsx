import React from "react";
import { useWriters } from "../../../../api/writerApi";
import { useSelector } from "react-redux";
import Loader from "../../../Loader";
import WriterCard from "../WriterCard";

const WriterList = () => {
  const { data: writers, isLoading, error } = useWriters();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500">Error fetching</p>;

  const filteredWriters = writers?.filter((writer) => {
    console.log(
      `Writer: ${writer.fullName} | writer.categoryId: ${writer.categoryId} | selectedCategory: ${selectedCategory}`
    );
    return writer.categoryId === Number(selectedCategory);
  });

  return (
    <div className="writer_list bg-[#191919] pt-[40px]">
      <div className="container grid grid-cols-6 gap-[20px]">
        {filteredWriters?.length ? (
          filteredWriters.map((writer) => (
            <WriterCard key={writer.id} writer={writer} />
          ))
        ) : (
          <p className="text-center text-white">
            No writers found for this category
          </p>
        )}
      </div>
    </div>
  );
};

export default WriterList;
