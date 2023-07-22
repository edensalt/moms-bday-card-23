import { useState } from "react";

const Picture = (props) => {

const [hover, setHover] = useState(false);

const handleHoverIn = () => {
    setHover(true)
}

const handleHoverOut = () => {
    setHover(false)
}

    return (
        <div>
            <div className="bg-orange-300 p-6 w-66 relative hover:cursor-pointer flex flex-col items-center" onMouseOver={handleHoverIn} onMouseLeave={handleHoverOut}>
                <img src={props.src} alt={props.alt} className={`z-10 w-fit h-fit aspect-auto relative ${hover ? 'transform translate-x-64 translate-y-64 rotate-45' : ''}`} style={{ transition: "transform 1s ease-in-out" }}  />
                <div className="absolute mt-4 p-4">Text about this picture</div>
            </div>
        </div>
    )
}

export default Picture;