import { useState } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`${
          isLoaded ? "opactity-100" : "opacity-0"
        } min-h-screen transition-opacity duration-700 bg-black text-gray-100`}
      ></div>
      <Navbar />
    </>
  );
}

export default App;
