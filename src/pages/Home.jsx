import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";


const Home = () => {
  return (
    <div>
      <div className="top-fixed">
        <Announcement />
        <Navbar />
      </div>
      <div className="not-top-fixed">
        <Slider />
        <Categories />
      </div>
    </div>
  );
};

export default Home;
