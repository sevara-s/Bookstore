import React from "react";

const BookCard = (book) => {
  console.log("Rendering BookCard:", book);

  if (!book) return <p className="text-red-500">No book data</p>;
  return (
    <section className="book">
      <div className="container">
        <h1 className="text-red-600">{book.name}</h1>
      </div>
    </section>
  );
};
export default BookCard;
