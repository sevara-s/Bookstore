import React from "react";
import { useWriterDetails } from "../../api/writerApi";
import { useParams } from "react-router-dom";

import Loader from "../../components/Loader";
import ijod from "../../assets/svgs/ijod.svg";

const WriterPage = () => {
  const { id } = useParams();
  const { data: writer, isLoading, error } = useWriterDetails(id);

  console.log(writer, "writing");

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500">Error fetching</p>;

  return (
    <section className="writer_info bg-[#191919] p-[25px] grid grid-cols-2 gap-6 items-start">
      {/* Writer Image Section */}
      <div className="writer_img w-[592px] h-[779px] overflow-hidden rounded-[50px]">
        <img
          className="w-full h-full object-cover aspect-[3/4]"
          src={writer[0]?.image || "https://via.placeholder.com/592x779"}
          alt={writer[0]?.fullName}
        />

        <div className="birth_data pt-[20px] flex items-center gap-[10px]">
          {/* Birth Year */}
          <div className="birth_year text-center">
            <p className="font-[300] text-[12px] text-white opacity-60">
              Tavallud sanasi
            </p>
            <h1 className="fontb font-[400] text-[39px] text-[#c9ac8c]">
              {writer[0]?.birthYear}
            </h1>
            <p className="font-[300] text-[12px] text-white opacity-60">
              Toshkent, Uzbekistan
            </p>
          </div>

          <div className="fontb font-[400] text-[39px] text-[#c9ac8c]">-</div>

          {/* Death Year */}
          <div className="death_year text-center">
            <p className="font-[300] text-[12px] text-white opacity-60">
              Vafot etgan yili
            </p>
            <h1 className="fontb font-[400] text-[39px] text-[#c9ac8c]">
              {writer[0]?.deathYear || "Hali hayot"}
            </h1>
            <p className="font-[300] text-[12px] text-white opacity-60">
              Toshkent, Uzbekistan
            </p>
          </div>
        </div>
      </div>

      {/* Writer Info Section */}
      <div className="book_info pt-[20px] pr-[20px]">
        <h1 className="fontb font-[400] text-[48px] text-center text-[#c9ac8c]">
          {writer[0]?.fullName}
        </h1>
        <p className="font-[400] text-[16px] text-white opacity-80">
          {writer[0]?.description}
        </p>

        <div className="ijodd pt-[20px]">
          <div className="ijod flex items-center gap-[5px] pt-[20px]">
            <img src={ijod} alt="Ijod" />
            <p className="fontb font-[400] text-[20px] text-[#c9ac8c]">Ijodi</p>
          </div>
          <p className="font-[400] text-[12px] text-[#fff] mt-2">
            Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
            ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
            muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
            qaytmaydi“ qissasi boʻldi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WriterPage;
