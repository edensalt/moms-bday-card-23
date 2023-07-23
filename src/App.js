import Header from "./Components/WelcomePage/Header";
import "./App.css";
import Card from './Components/Card/Card'
import { useState } from "react";

function App() {

  const [access, setAccess] = useState(false);

  const handleCardAccess = (accessStatus) => {
    if (accessStatus === true) {
      setAccess(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header onRequestAccess={handleCardAccess} display={access} />
          <Card display={access} />
        </div>
      </header>
    </div>
  );
}
export default App;
