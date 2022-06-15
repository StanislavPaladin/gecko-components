import React from "react";
import SportScoreItem from "../components/SportBet/SportScoreItem";
import ButtonsNavigation from "../components/UI/ButtonsNavigation";

import { ReactComponent as ArrowDownMini } from "../assets/icons/arrowDownMini.svg";
import { ReactComponent as PinIcon } from "../assets/icons/pin.svg";

import "../scss/pages/SportBet/index.scss";

const categoriesList = [
  { text: "Main", active: true },
  { text: "Totals" },
  { text: "Handicaps" },
  { text: "1st Half" },
  { text: "2nd Half" },
  { text: "Corners/Booking" },
  { text: "Combo Markets" },
];

const RenderTable = ({ columns, title, items }) => {
  return (
    <div className="sportBet-table">
      <div className="sportBet-table-title">
        {title}
        <ArrowDownMini className="arrow" />
        <PinIcon className="pin"/>
      </div>
      <div className={`sportBet-table-container ${columns}`}>
        {items.map((item) => {
          return (
            <div className="sportBet-table-container-item">
              <p className="label">{item.label}</p>
              <p className="value">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SportBet = () => {
  return (
    <div className="container sport">
      <div className="sportBet">
        <div className="sportBet-nav">
          <div className="nav-item active">
            Soccer (149)
            <ArrowDownMini />
          </div>
          <div className="nav-item">Popular Soccer</div>
          <div className="nav-item img">
            <img
              src={require("../assets/eng.png")}
              alt="eng"
              className="nav-item-img"
            />
            Premier League
          </div>
        </div>
        <SportScoreItem country={"France"} league={"Ligue 1"} />
        <ButtonsNavigation buttonsList={categoriesList}/>
        <RenderTable
          columns="three"
          title="1x2"
          items={[
            { label: "FC Nantes", value: "5.6" },
            { label: "draw", value: "4.7" },
            { label: "Stade Rennes", value: "1.52" },
          ]}
        />
        <RenderTable
          columns="three"
          title="Double Chance"
          items={[
            { label: "Leeds United", value: "5.6" },
            { label: "draw", value: "4.7" },
            { label: "Chelsea FC", value: "1.52" },
          ]}
        />
        <RenderTable
          columns="two"
          title="Total"
          items={new Array(24).fill({ label: "over 0,5", value: "1.02" })}
        />
        <RenderTable
          columns="two"
          title="Both teams to score"
          items={[
            { label: "yes", value: "5.6" },
            { label: "no", value: "1.52" },
          ]}
        />
        <RenderTable
          columns="two"
          title="Draw no bet"
          items={[
            { label: "FC Nances", value: "15.6" },
            { label: "Stade Renners", value: "1.02" },
          ]}
        />
        <RenderTable
          columns="three"
          title="Handicap 1:0"
          items={[
            { label: "Leeds United", value: "5.6" },
            { label: "draw", value: "4.7" },
            { label: "Chelsea FC", value: "1.52" },
          ]}
        />
        <RenderTable
          columns="three"
          title="Handicap 3:0"
          items={[
            { label: "Leeds United", value: "125.6" },
            { label: "draw", value: "14.7" },
            { label: "Chelsea FC", value: "5.22" },
          ]}
        />
        <RenderTable
          columns="three"
          title="Handicap 4:0"
          items={[
            { label: "Leeds United", value: "35.6" },
            { label: "draw", value: "34.7" },
            { label: "Chelsea FC", value: "1.01" },
          ]}
        />
      </div>
    </div>
  );
};

export default SportBet;
