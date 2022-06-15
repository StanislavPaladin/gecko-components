import React from "react";
import CocoLotteryItem from "../components/Lottery/CocoLotteryItem";
import LotteryBanner from "../components/Lottery/LotteryBanner";
import ButtonsNavigation from "../components/UI/ButtonsNavigation";

import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrowRight.svg";

import "../scss/pages/Lottery/index.scss";

const buttonsList = [
  {
    text: "My ticket(0)",
    active: true,
  },
  {
    text: "My winnings",
    active: false,
  },
  {
    text: "History",
    active: false,
  },
];

const lotteryList = [
  {
    matches: { text: "5 NUMBERS JACKPOT BALL", jackpot: true },
    prize: { value: "$100,000", active: true },
  },
  {
    matches: { text: "5 numbers", jackpot: false },
    prize: { value: "$3,000", active: false },
  },
  {
    matches: { text: "4 numbers", jackpot: false },
    prize: { value: "$20", active: false },
  },
  {
    matches: { text: "3 numbers", jackpot: false },
    prize: { value: "$1", active: false },
  },
  {
    matches: { text: "2 numbers", jackpot: false },
    prize: { value: "", active: false },
  },
  {
    matches: { text: "No numbers", jackpot: false },
    prize: { value: "", active: false },
    ticket: true,
  },
];

const Lottery = () => {
  return (
    <div className="container">
      <div className="lottery">
        <LotteryBanner />
        <ButtonsNavigation buttonsList={buttonsList} />
        <div className="lottery-tickets">
          <div className="tickets">
            <img src={require("../assets/lotteryTicket.png")} alt="ticket" className="ticket" />
            <img src={require("../assets/lotteryTicket.png")} alt="ticket" className="ticket" />
            <img src={require("../assets/lotteryTicket.png")} alt="ticket" className="ticket" />
            <img src={require("../assets/lotteryTicket.png")} alt="ticket" className="ticket" />
            <img src={require("../assets/lotteryTicket.png")} alt="ticket" className="ticket" />
            <img src={require("../assets/lotteryTicket.png")} alt="ticket" className="ticket" />
            <img src={require("../assets/lotteryTicket.png")} alt="ticket" className="ticket" />
          </div>
          <p>You have no ticket!</p>
          <button className="primary-btn">Buy new ticket!</button>
        </div>
        <h2 className="lottery-h2">How to play</h2>
        <div className="lottery-tips">
          <div className="tip">
            <h3>Buy tickets</h3>
            <p>Buy ticket with $0.1, and choose numbers for ticket.</p>
          </div>
          <div className="tip">
            <h3>Wait for the draw</h3>
            <p>Wait for the draw at 15:00 UTC+0 daily.</p>
          </div>
          <div className="tip">
            <h3>Check for prizes</h3>
            <p>
              Once the draw is over, come back to this page and check your
              prize.
            </p>
          </div>
        </div>
        <div className="lottery-rule-wrap">
          <h2 className="lottery-h2">Coco lottery rule</h2>
          <div className="lottery-cocoTable-wrap">
            <div className="lottery-cocoTable">
              <div className="lottery-cocoTable-headings">
                <div className="heading">Matches</div>
                <div className="heading">Numbers</div>
                <div className="heading">Prize</div>
              </div>
              {lotteryList.map(({ matches, prize, ticket }, i) => {
                return (
                  <CocoLotteryItem
                    matches={matches}
                    prize={prize}
                    ticket={ticket}
                    active={(i % 2)}
                  />
                );
              })}
            </div>
          </div>
          <div className="lottery-instructions">
            <h3>Lottery Instructions:</h3>
            <ul>
              <li>
                A provably fair algorithm is used to draw the lottery prizes.
              </li>
              <li>Prizes are drawn at 15:00 UTC+0 everyday.</li>
              <li>You can buy a ticket for $0.1.</li>
              <li>The sale of tickets stop at 14:55 UTC+0 everyday.</li>
              <li>
                The player chooses six numbers for each ticket, the first five are
                from 1 to 36, and the last one is from 1 to 10.
              </li>
              <li>You can choose numbers manually or automatically.</li>
              <li>If you have BCL, you can use BCL to redeem Tickets.</li>
              <li>Each draw produces six numbers.</li>
              <li>
                The more numbers you match in the first five numbers, greater
                prize you will win.
              </li>
            </ul>
            <h3>Winning Prize Details:</h3>
            <ul>
              <li>All six numbers matched: $100,000 prize.</li>
              <li>
                In case you are not the only winner, you may need to share the
                prize equally with others.
              </li>
              <li>
                Five numbers matched, and the sixth number is missed: Each ticket
                gets a $3,000 prize.
              </li>
              <li>
                Four of the first 5 numbers matched: Each ticket gets a $20 prize.
              </li>
              <li>
                Three of the first 5 numbers matched: Each ticket gets a $1 prize.
              </li>
              <li>
                If all six numbers are missed, the lottery will be reserved for
                free, and continue participating in the next day's draw.
              </li>
            </ul>
            <button className="lottery-instructions-btn">
              Provably fair
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="lottery-about">
          <div className="col">
            <h3>What is BCL?</h3>
            <p>
              What Is BCL? BCL (BC Lottery) is a token created by BC.GAME for
              players who love the Lottery. You can use BCL to redeem lottery
              tickets in the Lottery at any time <span>GCL = 1 lottery ticket.</span>
            </p>
            <div className="details">
              <a href="/">
                Details <ArrowRightIcon />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="buttons-wrap">
              <p>Your BCL Balance:</p>
              <button className="about-btn first primary-btn">0</button>
              <div className="btn-wrap">
              <button className="about-btn secondary-btn">Get more GCL</button>
              <button className="about-btn primary-btn">Send Gift</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lottery;
