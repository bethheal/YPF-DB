import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { c } from "./cardConstants";
import "../../App.css";

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (index, pathLink) => {
    if (index === expandedCard) {
      setExpandedCard(null); // Collapse if already expanded
    } else {
      setExpandedCard(index); // Expand the selected card
      setTimeout(() => {
        navigate(pathLink, { state: { expanded: true, cardIndex: index } });
      }, 700); // Delay navigation until after the animation
    }
  };

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-y-10 gap-x-10 m-10">
      {c.CARDS.map((item, index) => (
        <div
          key={index}
          className={`card ${expandedCard === index ? "expanded" : ""}`}
          onClick={() => handleCardClick(index, item.pathLink)}
        >
          <div
            className="h-40 rounded-2xl w-40 bg-blue-950 flex items-center justify-center transition duration-300 ease-in-out hover:shadow-2xl dark:hover:shadow-black/30"
          >
            <div className="flex flex-col items-center text-white">
              <div className="card-icon">{item.cardIcon}</div>
              <div className="card-name">{item.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
