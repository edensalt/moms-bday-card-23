import { useState } from "react";

const Picture = (props) => {
  const [hover, setHover] = useState(false);
  const [imageLoad, setImageLoad] = useState(false);

  const handleHoverIn = () => {
    setHover(true);
  };

  const handleHoverOut = () => {
    setHover(false);
  };

  const handleImageLoad = () => {
    setImageLoad(true)
  }

  return (
    <div>
      <div
        className="bg-orange-300 p-6 w-96 rounded md:w-auto relative shadow hover:cursor-pointer flex flex-col items-center"
        onMouseOver={handleHoverIn}
        onMouseLeave={handleHoverOut}
      >
        <img
          src={props.src}
          alt={props.alt}
          className={`z-10 w-fit h-fit aspect-auto relative rounded transition duration-1000 opacity ${
            hover ? "transform translate-x-64 translate-y-64 rotate-45" : ""
          } ${imageLoad ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 1s ease-in-out" }}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 flex justify-center items-center h-full w-full">
          <div className={`p-6 xl:text-[21px] ${imageLoad ? "text-black" : "text-transparent"}`}>{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Picture;
