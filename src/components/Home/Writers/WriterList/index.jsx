import React from "react";
import { useWriters } from "../../../../api/writerApi";
import { useSelector } from "react-redux";
import Loader from "../../../Loader";
import WriterCard from "../WriterCard";
import { useBooks } from "../../../../api/bookApi";
import BookCard from "../../books/BooksCard";

const WriterList = () => {
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  console.log("🟡 Selected Category:", selectedCategory);

  const { data: writers, isLoading: writersLoading, error: writersError } = useWriters(selectedCategory);
  const { data: books, isLoading:booksLoading, isError:booksError } = useBooks(selectedCategory?.id);
  if (writersLoading || booksLoading) return <Loader />;
  if (writersError || booksError) return <p className="text-red-500">Error fetching data</p>;

  
 
 
  const categoryId = Number(selectedCategory?.id);
  const filteredBooks = books?.filter((book) => Number(book.categoryId) === categoryId);

  console.log("🔵 Filtered Books:", filteredBooks);

  return (
    <div className="writer_list bg-[#191919] pt-[40px] pb-[20px]">
      <div className="container grid grid-cols-6 gap-[20px] place-items-center">
        {writers?.length > 0 ? (
          writers.map((writer) => <WriterCard key={writer.id} writer={writer} />)
        ) : (
          <div className="flex items-center justify-center col-span-6">
            <p className="text-[#c9ac8c]">No writers found for this category</p>
          </div>
        )}
      </div>

     
      {filteredBooks?.length > 0 ? (
        <div className="container grid grid-cols-6 gap-[20px] place-items-center mt-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        categoryId === 5 && (
          <p className="text-[#c9ac8c] text-center mt-4">No books found for this category</p>
        )
      )}
    </div>
  );
};

export default WriterList;
