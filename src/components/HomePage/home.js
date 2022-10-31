import React from "react";
import Card from "../common/card";
import BarChart from "./BarChart";
import "./home.css";
import Pie from "../common/PieChart/PieChart";

const Home = () => {
  const data = [
    {
      data: 0,
      value: "50"
    },
    {
      data: 1,
      value: "30"
    },
    {
      data: 2,
      value: "20"
    }
  ];
  return (
    <div className="rightContainer">
      <div className="conatiner">
        <div className="home-title">Welcome Anna</div>
        <div className="home-section">
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
              <div className="chart-title">Faults Detected</div>
              <BarChart />
            </div>
          </div>
          <div className="right-home">
            <div className="pie-card">
              <Pie
                data={data}
                width={400}
                height={300}
                innerRadius={80}
                outerRadius={120}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
