import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// 📸 Open House Images
import oh1 from "../assets/Images/openHouse/1.jpg";
import oh2 from "../assets/Images/openHouse/2.jpg";
import oh3 from "../assets/Images/openHouse/3.jpg";
import oh4 from "../assets/Images/openHouse/4.jpg";
import oh5 from "../assets/Images/openHouse/5.jpg";
import oh6 from "../assets/Images/openHouse/6.jpg";
import oh7 from "../assets/Images/openHouse/7.jpg";
import oh8 from "../assets/Images/openHouse/8.jpg";
import oh9 from "../assets/Images/openHouse/9.jpg";
import oh10 from "../assets/Images/openHouse/10.jpg";
import oh11 from "../assets/Images/openHouse/11.jpg";
import oh12 from "../assets/Images/openHouse/12.jpg";
import oh13 from "../assets/Images/openHouse/13.jpg";
import oh14 from "../assets/Images/openHouse/14.jpg";
import oh15 from "../assets/Images/openHouse/15.jpg";
import oh16 from "../assets/Images/openHouse/16.jpg";

import ac1 from "../assets/Images/artContest/1.jpg"; 
import ac2 from "../assets/Images/artContest/2.jpg"; 
import ac3 from "../assets/Images/artContest/3.jpg"; 
import ac4 from "../assets/Images/artContest/4.jpg"; 
import ac5 from "../assets/Images/artContest/5.jpg"; 
import ac6 from "../assets/Images/artContest/6.jpg"; 
import ac7 from "../assets/Images/artContest/7.jpg"; 
import ac8 from "../assets/Images/artContest/8.jpg"; 
import ac9 from "../assets/Images/artContest/9.jpg"; 
import ac10 from "../assets/Images/artContest/10.jpg"; 
import ac11 from "../assets/Images/artContest/11.jpg"; 
import ac12 from "../assets/Images/artContest/12.jpg"; 
import ac13 from "../assets/Images/artContest/13.jpg"; 
import ac14 from "../assets/Images/artContest/14.jpg"; 
import ac15 from "../assets/Images/artContest/15.jpg"; 
import ac16 from "../assets/Images/artContest/16.jpg"; 
import ac17 from "../assets/Images/artContest/17.jpg"; 
import ac18 from "../assets/Images/artContest/18.jpg"; 
import ac19 from "../assets/Images/artContest/19.jpg"; 
import ac20 from "../assets/Images/artContest/20.jpg"; 
import ac21 from "../assets/Images/artContest/21.jpg"; 
import ac22 from "../assets/Images/artContest/22.jpg"; 
import ac23 from "../assets/Images/artContest/23.jpg"; 
import ac24 from "../assets/Images/artContest/24.jpg"; 
import ac25 from "../assets/Images/artContest/25.jpg"; 
import ac26 from "../assets/Images/artContest/26.jpg"; 
import ac27 from "../assets/Images/artContest/27.jpg";

const albums = {
  "open-house": {
    title:"Open House – 2025",
    description:
      "Our daycare students had a blast exploring fire equipment, learning fire safety tips, and becoming mini heroes for the day! 👨‍🚒👩‍🚒",
    photos: [
      oh1, oh2, oh3, oh4, oh5, oh6, oh7, oh8,
      oh9, oh10, oh11, oh12, oh13, oh14, oh15, oh16,
    ],
  },
  "art-contest": {
    title: "Art Contest – 2025",
    description:
      "Showcased the incredible talent of young minds, proving that art is not just about expression, it’s also a powerful tool for awareness and change. Through knowledge, poetry, and visual storytelling, we continue to inspire a safer and more fire-resilient community.",
    photos: [
      ac1, ac2, ac3, ac4, ac5, ac6, ac7, ac8, ac9, ac10, ac11, ac12, ac13, ac14, ac15, ac16, ac17, ac18, ac19, ac20, ac21, ac22, ac23, ac24, ac25, ac26, ac27
    ],
  },
};

export default function Album() {
  const { albumId } = useParams();
  const album = albums[albumId];

  const [selectedIndex, setSelectedIndex] = useState(null);

  /* ✅ SCROLL TO TOP WHEN PAGE LOADS */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* ✅ KEYBOARD SUPPORT */
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((i) => (i + 1) % album.photos.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((i) => (i - 1 + album.photos.length) % album.photos.length);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, album]);

  if (!album) {
    return <p className="text-center mt-20">Album not found.</p>;
  }

  return (
    <div className="min-h-screen px-6 md:px-10 py-20">
      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-4">{album.title}</h2>
      <p className="text-gray-600 mb-10 max-w-3xl">
        {album.description}
      </p>

      {/* 📸 PHOTO GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {album.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt=""
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setSelectedIndex(index);
            }}
            className="rounded-lg shadow object-cover h-60 w-full cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>

      {/* 🔍 LIGHTBOX VIEWER */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          {/* PREV */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                selectedIndex === 0
                  ? album.photos.length - 1
                  : selectedIndex - 1
              );
            }}
            className="absolute left-4 md:left-10 text-white text-5xl font-bold hover:scale-110 transition"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={album.photos[selectedIndex]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-xl"
          />

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                selectedIndex === album.photos.length - 1
                  ? 0
                  : selectedIndex + 1
              );
            }}
            className="absolute right-4 md:right-10 text-white text-5xl font-bold hover:scale-110 transition"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
