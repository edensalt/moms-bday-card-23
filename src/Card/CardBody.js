import Picture from "./Picture";

const CardBody = () => {

    const pictures = [
        {
            key: 0,
            src: '../Assets/alpha.jpeg',
            alt: 'Coffee before skiing'
        },
        {
            key: 1,
            src: '../Assets/beers.jpeg',
            alt: 'Beers at Craft Collective'
        },
        {
            key: 2,
            src: '../Assets/gabriellas.jpeg',
            alt: 'Eating at Gabriellas'
        },
        {
            key: 3,
            src: '../Assets/climbing.jpeg',
            alt: 'Climbing at Shaker Rocks'
        },
        {
            key: 4,
            src: '../Assets/bridge.jpeg',
            alt: 'Doing our favorite walk on Town Lake'
        },
        {
            key: 5,
            src: '../Assets/bouldin.jpeg',
            alt: 'Our favorite lunch at Bouldin Creek Cafe'
        },
        {
            key: 6,
            src: '../Assets/lexi.jpeg',
            alt: 'The three of us',
        },
        {
            key: 7,
            src: '../Assets/golf.jpeg',
            alt: 'Golf at Top Golf'
        },
    ]

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            {pictures.map((picture) => (
                <Picture key={picture.key} src={picture.src} alt={picture.alt} />
            ))}
        </div>
    )
}

export default CardBody;