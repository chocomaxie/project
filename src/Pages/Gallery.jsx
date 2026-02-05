import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

import openHouse from "../assets/Images/openHouse/1.jpg"
import artContest from "../assets/Images/artContest/1.jpg"

export default function Gallery() {
  const navigate = useNavigate();

  const albums = [
    {
      id: "open-house",
      title: "Open House - 2025",
      cover: openHouse,
      description: "Our daycare students had a blast exploring fire equipment, learning fire safety tips, and becoming mini heroes for the day! 👨‍🚒👩‍🚒",
    },
    {
      id: "art-contest",
      title: "Art Contest - 2025",
      cover: artContest,
      description: "Showcased the incredible talent of young minds, proving that art is not just about expression, it’s also a powerful tool for awareness and change. Through knowledge, poetry, and visual storytelling, we continue to inspire a safer and more fire-resilient community.",
    },
  ];

  return (
    <Element name="gallery" className="min-h-screen px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {albums.map((album) => (
          <div
            key={album.id}
            onClick={() => navigate(`/gallery/${album.id}`)}
            className="cursor-pointer rounded-xl overflow-hidden shadow hover:scale-105 transition"
          >
            <img
              src={album.cover}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">{album.title}</h3>
              <p className="text-sm text-gray-600">{album.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}
