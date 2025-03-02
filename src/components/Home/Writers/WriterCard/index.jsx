import React from "react";

// SVG imports
import book from "../../../../assets/svgs/book.svg";
import audio from "../../../../assets/svgs/audio.svg";

const WriterCard = ({ writer }) => {
  return (
    <div className="writer1 w-[173px] h-[230px] flex flex-col items-center gap-2 p-2 bg-[#282828] rounded-[15px] shadow-lg">
      {/* Image Container */}
      <div className="w-[173px] h-[132px] flex items-center justify-center overflow-hidden bg-gray-800 rounded-md">
        <img
          src={writer.image}
          className="w-full h-full object-contain filter grayscale"
          alt={writer.fullName}
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center flex-grow">
        <h3 className="text-[#c9ac8c] text-[15px] font-[400] text-center">
          {writer.fullName}
        </h3>
        <p className="text-[12px] font-[400] text-white opacity-60">
          {writer.birthYear} - {writer.deathYear}
        </p>
      </div>

      {/* Books & Audio Section */}
      <div className="books_audio flex items-center justify-center gap-[20px]">
        <div className="books flex items-center gap-[3px]">
          <img src={book} alt="Book icon" />
          <p className="font-[400] text-[16px] text-[#fff]">{writer.books}</p>
        </div>
        <div className="audio flex items-center gap-[3px]">
          <img src={audio} alt="Audio icon" />
          <p className="font-[400] text-[16px] text-[#fff]">{writer.audioBooks}</p>
        </div>
      </div>
    </div>
  );
};

export default WriterCard;
