import React from "react";
import "./App.css";
import BreadCrumbs from "./component/BreadCrumbs";
import HeroContainer from "./component/HeroContainer";
import Navbar from "./component/navbar";
import OfferedBy from "./component/OfferedBy";
import ProfileMenu from "./component/ProfileMenu";
import VideoCard from "./component/VideoCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <div className="w-1/3">
          <ProfileMenu />
        </div>

        <div className="flex">
          <div className="w-1/2">
            <BreadCrumbs />
            <HeroContainer />
          </div>
          <div className="w-1/4">
            <OfferedBy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
