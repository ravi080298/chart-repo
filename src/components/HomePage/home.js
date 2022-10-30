import React from "react";
import Card from "../common/card";
import BarChart from "./BarChart";
import "./home.css";

const Home = () => {
  return (
    <div className="rightContainer">
      <div className="conatiner">
        <div className="home-title">Welcome Anna</div>
        <div>
          <div className="left-home">
            <Card
              number={12}
              src={"./png1.png"}
              text={"Faulty Vonnectors Detected"}
            />
            <Card
              number={6}
              src={"./Group.png"}
              text={"Connectors failing in 30 days"}
            />
            <div className="card-chart">
              <BarChart />
            </div>
          </div>
          <div className="right-home"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
