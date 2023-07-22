import { useEffect, useState } from "react";
import Password from "./Password";

const Header = (props) => {

    const [display, setDisplay] = useState('block')

    useEffect(() => {
        if (props.display === true) {
          setDisplay("hidden");
        } else {
          setDisplay("block");
        }
      }, [props.display]);

  const handleAccess = (accessStatus) => {
    const accessGranted = accessStatus;
    console.log(accessGranted);
    props.onRequestAccess(accessGranted);
  };

  return (
    <div className={`${display} py-4`}>
      <div className="text-5xl pb-4">Happy birthday, Mom!</div>
      <div className="text-lg">Enter the secret code to open your card.</div>
      <Password onEnterPassword={handleAccess} />
    </div>
  );
};

export default Header;
