import Picture from "./Picture";

import alpha from '../Assets/alpha.jpeg'
import beer from '../Assets/beers.jpeg'
import gabriella from '../Assets/gabriellas.jpeg'
import climbing from '../Assets/climbing.jpeg'
import walk from '../Assets/bridge.jpeg'
import bouldin from '../Assets/bouldin.jpeg'
import lexi from '../Assets/lexi.jpeg'
import golf from '../Assets/golf.jpeg'

const CardBody = () => {

    const pictures = [
        {
            key: 0,
            src: alpha,
            alt: 'Coffee before skiing',
            text: 'I had an incredible time going skiing together for the first time in over 10 years!'
        },
        {
            key: 1,
            src: beer,
            alt: 'Beers at Craft Collective',
            text: `This night of climbing, Brassica and Craft Collective was so perfect. I loved how it reminded me of my year in Cleveland!`
        },
        {
            key: 2,
            src: gabriella,
            alt: `Dinner at Gabriella's`,
            text: `It was so much fun going to your favorite spots when you visited town, like Gabriella's and Grey Market.`
        },
        {
            key: 3,
            src: climbing,
            alt: 'Climbing at Shaker Rocks',
            text: `It's been awesome getting to enjoy one of my favorite activities with you: climbing! And you're so great at it, too!`
        },
        {
            key: 4,
            src: walk,
            alt: 'Walking on Town Lake',
            text: `I love how often you visited Austin last year. I feel so lucky to have a mom that comes to visit me on the other side of the country all the time!`
        },
        {
            key: 5,
            src: bouldin,
            alt: 'Our favorite lunch at Bouldin Creek Cafe',
            text: `I'm so grateful for how much you enjoy spending time with Ben and Kreia, whether out to eat, playing games, or on a "w"-"a"-"l"-"k"!`
        },
        {
            key: 6,
            src: lexi,
            alt: 'Just the three of us!',
            text: `While distance has kept us far this year, I love that we got to talk over the phone so frequently.`,
        },
        {
            key: 7,
            src: golf,
            alt: 'Golf for my birthday',
            text: `You made my birthday so special by visiting last year. I hope your birthday is just as wonderful! Only a few days until we can celebrate together in person!`
        },
    ]

    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-10 justify-center">
            {pictures.map((picture) => (
                <Picture key={picture.key} src={picture.src} alt={picture.alt} text={picture.text} />
            ))}
        </div>
    )
}

export default CardBody;