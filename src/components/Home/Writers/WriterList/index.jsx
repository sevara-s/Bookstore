import React from "react";
import { useWriters } from "../../../../api/writerApi";
import { useSelector } from "react-redux";
import Loader from "../../../Loader";
import WriterCard from "../WriterCard";
import { div } from "framer-motion/client";

const WriterList = () => {
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const { data: writers, isLoading, error } = useWriters(selectedCategory);

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500">Error fetching</p>;

  return (
    <div className="writer_list bg-[#191919] pt-[40px] pb-[20px]">
      <div className="container grid grid-cols-6 gap-[20px] place-items-center">
        {writers?.length ? (
          writers.map((writer) => (
            <WriterCard key={writer.id} writer={writer} />
          ))
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-[#c9ac8c]">
              No writers found for this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WriterList;
