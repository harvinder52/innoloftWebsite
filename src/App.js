import React from "react";
import "./App.css";
import HeroContainer from "./component/HeroContainer";
import Navbar from "./component/navbar";
import OfferedBy from "./component/OfferedBy";
import ProfileMenu from "./component/ProfileMenu";
import VideoCard from "./component/VideoCard";
import OfferDetailsCard from "./component/OfferDetailsCard";
import BreadCrumbs from "./component/BreadCrumbs";
import { fetchData } from "./api";
import DataUpdater from "./component/dataUpdater";
import { useSelector } from "react-redux";

function App() {
  const userSelection = useSelector(
    (state) => state.configuration.configuration
  );
  console.log(userSelection);
  fetchData();
  return (
    <div className="App">
      <DataUpdater />
      <Navbar />

      <div className="flex">
        <div className="hidden lg:w-1/4 lg:flex justify-end">
          <ProfileMenu />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="w-full py-4">
            <BreadCrumbs></BreadCrumbs>
          </div>
          <div className="w-full lg:flex">
            <div className="lg:w-2/3 ">
              <HeroContainer />
            </div>
            <div className="lg:w-1/3">
              {userSelection === "false" ? null : <OfferedBy />}
            </div>
          </div>
          <div className="w-full py-4">
            <VideoCard />
          </div>
          <div className="w-full py-4">
            <OfferDetailsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
