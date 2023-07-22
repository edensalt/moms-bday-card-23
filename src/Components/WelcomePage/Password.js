import { useState } from "react"

const Password = (props) => {

    const [enteredPassword, setEnteredPassword] = useState('');

    const handleEnteredPassword = (e) => {
        setEnteredPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const attempt = enteredPassword;
        let accessGranted;

        if (attempt === 'mama llama' || attempt === 'Mama llama') {
            accessGranted = true;
        } else accessGranted = false;

        props.onEnterPassword(accessGranted);

        setEnteredPassword('');

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="px-2 mr-4 text-black" value={enteredPassword} onChange={handleEnteredPassword} />
                <button type="submit" className="px-2 border">&#8594;</button>
            </form>
        </div>
    )
}

export default Password