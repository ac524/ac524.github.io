import { useState } from "react";
import MainBio from "./components/MainBio";
import Navbar from "./components/Navbar";
import PortfolioGrid from "./components/PortfolioGrid";

function App() {

  console.log(document.location);

  const [ view, setView ] = useState(() => {
    return document.location.hash.slice(1);
  });

  return (
    <>
      <Navbar view={view} setView={setView} />
      {view === "bio" && <MainBio />}
      {view === "portfolio" && <PortfolioGrid />}
    </>
  );

}

export default App;
