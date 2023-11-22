import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemSlides = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Use useEffect to fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("/items.json");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="relative overflow-hidden bg-cover bg-no-repeat max-w-xs mb-10"
          >
            <img
              src={item.image}
              alt={item.name}
              className="transition duration-500 ease-in-out hover:scale-110"
            />
            <h1
              style={{ textShadow: "2px 2px 5px rgba(0, 0, 0)" }}
              className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 md:text-xl lg:text-4xl font-dancingScript font-bold text-white text-center md:w-40 lg:w-60"
            >
              {item.name}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemSlides;
