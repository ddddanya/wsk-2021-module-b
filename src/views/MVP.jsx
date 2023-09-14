import { useEffect, useState } from "react";

const images = [
  "../images/graz/Stadthalle-Graz-©MCG-Krug-4-1200x675.jpg",
  "../images/graz/benjamin-wedemeyer-FE0behAs3Vo-unsplash.jpg",
  "../images/graz/benjamin-wedemeyer-Ih4cJ1xco3c-unsplash.jpg",
  "../images/graz/daniel-j-schwarz-jxUnroJFF8Q-unsplash.jpg",
  "../images/graz/josh-hild-03NoCdSvbLw-unsplash.jpg",
  "../images/graz/peter-paul-moschik-aOt-Ny4T5q4-unsplash.jpg",
  "../images/graz/vidisha-sanghvi-PS-l_xvrWAI-unsplash.jpg",
];

const MVP = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const updateImageInterval = setInterval(() => {
      let newIndex = activeImageIndex + 1;
      if (newIndex >= images.length) {
        newIndex = 0;
      }

      console.log(newIndex);

      setActiveImageIndex(newIndex);
    }, 5000);

    return () => {
      clearInterval(updateImageInterval);
    };
  }, [activeImageIndex]);

  return (
    <div
      className="mvp"
      style={{
        background: `url("${images[activeImageIndex]}") center center / cover no-repeat`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="mvp"
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(5px)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="title">Stars in Graz</div>
        <div className="place">Место проведения: Messe Congress Graz</div>
        <div className="date">Дата: 30.11.2021</div>
        <div className="available">Полный сайт будет доступен 19.11.2021</div>

        {/* <div className="background">
        <img src={image1} />
      </div> */}
      </div>
    </div>
  );
};

export default MVP;
