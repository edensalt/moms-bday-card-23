import { useEffect, useState } from "react"
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";

const Card = (props) => {

    const [display, setDisplay] = useState('hidden')

    useEffect(() => {
        if (props.display === true) {
          setDisplay("block");
        } else {
          setDisplay("hidden");
        }
      }, [props.display]);
    


    return (
        <div className={`${display} p-4`}>
            <CardTitle />
            <CardBody />
        </div>
    )
}

export default Card;