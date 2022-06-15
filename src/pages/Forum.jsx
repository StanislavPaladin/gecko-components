import React, { useContext } from "react";
import { Routes, Route, matchRoutes, useLocation } from "react-router-dom";

import ForumItem from "../components/Forum/ForumItem";
import SpecialForumItem from "../components/Forum/SpecialForumItem";
import PopularTopicItem from "../components/Forum/PopularTopicItem";
import RecentlyTopicItem from "../components/Forum/RecentlyTopicItem";
import ForumDetail from "../components/Forum/ForumDetail";

import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrowRight.svg";
import { ReactComponent as ArrowDownMini } from "../assets/icons/arrowDownMini.svg";
import { ReactComponent as TickIcon } from "../assets/icons/tick.svg";

import { ChatContext, ModalsContext } from "../context";
import "../scss/pages/Forum/index.scss";

const topicsList = [
  {
    title: "Community survey and 200$ bonus to deposit",
    author: "DEFI.GAME",
    date: "Wednesday at 07:33 PM",
    category: "VIP Challenges",
    views: "5108 views",
    hot: true,
    color: "dodgerblue",
    replies: "250",
    lastReply: {
      author: "martwin",
      date: "26 minutes ago",
    },
  },
  {
    title: "$4,000 Top Tier Endorphina Multiplier Battle!",
    author: "Niobium",
    date: "Wednesday at 07:33 PM",
    category: "VIP Challenges",
    views: "1108 views",
    hot: false,
    color: "lime",
    replies: "68",
    lastReply: {
      author: "vwrta2",
      date: "5 minutes ago",
    },
  },
  {
    title: "Community survey and 200$ bonus to deposit",
    author: "DEFI.GAME",
    date: "Wednesday at 07:33 PM",
    category: "VIP Challenges",
    views: "5108 views",
    hot: true,
    color: "dodgerblue",
    replies: "250",
    lastReply: {
      author: "martwin",
      date: "26 minutes ago",
    },
  },
  {
    title: "$4,000 Top Tier Endorphina Multiplier Battle!",
    author: "Niobium",
    date: "Wednesday at 07:33 PM",
    category: "VIP Challenges",
    views: "1108 views",
    hot: false,
    color: "lime",
    replies: "68",
    lastReply: {
      author: "vwrta2",
      date: "5 minutes ago",
    },
  },
  {
    title: "$4,000 Top Tier Endorphina Multiplier Battle!",
    author: "Niobium",
    date: "Wednesday at 07:33 PM",
    category: "VIP Challenges",
    views: "1108 views",
    hot: false,
    color: "lime",
    replies: "68",
    lastReply: {
      author: "vwrta2",
      date: "5 minutes ago",
    },
  },
];

const specialTopicsList = [
  {
    title: "Official Announcements",
    categories: ["Keno Single"],
    description:
      "Read the latest official announcements and news at DEFI.GAME. For DEFI.GAME staff post staff posting only.",
    posts: "537",
    msg: "martwin",
    nick: "pereirafunk",
    date: "03:27 AM",
  },
  {
    title: "Official Announcements",
    categories: ["Scripts", "Baccart", "Keno", "Keno Single"],
    description:
      "Read the latest official announcements and news at DEFI.GAME. For DEFI.GAME staff post staff posting only.",
    posts: "2337",
    msg: "martwin",
    nick: "pereirafunk",
    date: "02:27 AM",
  },
  {
    title: "Official Announcements",
    categories: ["Scripts", "Baccart", "Keno Single"],
    description:
      "Read the latest official announcements and news at DEFI.GAME. For DEFI.GAME staff post staff posting only.",
    posts: "136",
    msg: "martwin",
    nick: "pereirafunk",
    date: "05:27 AM",
  },
];

const RenderForumSection = ({ title, topicsList, special }) => {
  return (
    <div className="forum-section">
      <div className="forum-section-head">
        {title ? (
          title
        ) : (
          <div className="forum-section-head-navs">
            <div className="pagination">
              <div className="pagination-item active">1</div>
              <div className="pagination-item">2</div>
              <div className="pagination-item">3</div>
              <div className="pagination-item">4</div>
              <div className="pagination-item">Next</div>
              <div className="pagination-item">
                <ArrowRightIcon />
              </div>
              <p>Page 1 of 4</p>
              <ArrowDownMini />
            </div>
            <div className="navs">
              <div className="nav-item">
                <TickIcon /> MARK FORUM AS READ
              </div>
              <div className="nav-item">
                SORT BY <ArrowDownMini />
              </div>
            </div>
          </div>
        )}
      </div>
      {topicsList.map((el) => {
        if (special) {
          return <SpecialForumItem {...el} />;
        } else {
          return <ForumItem {...el} />;
        }
      })}
    </div>
  );
};

const RenderForum = () => {
  return (
    <>
      <RenderForumSection title={"Trending Topics"} topicsList={topicsList} />
      <div className="section-title">
        <h2>Forums</h2>
        <div className="primary-btn-small">Start new topic</div>
      </div>
      <RenderForumSection topicsList={topicsList} />
      <RenderForumSection
        title={"DEFI.GAME Topics"}
        topicsList={specialTopicsList}
        special
      />
    </>
  );
};

const Forum = () => {
  const location = useLocation();
  const { isModalActive, setModalActive } = useContext(ModalsContext);

  return (
    <div className="forum">
      <div className="forum-header">
        <div className="forum-nav">
          <div className="list-btn">Home</div>
          <div className="list-btn active">Forum</div>
        </div>
        <div className="icons-mobile">
          {/* <img
            className="header-mobile-item"
            src={require("../assets/headerMobile6.png")}
            alt="item"
          />
          <img
            className="header-mobile-item"
            src={require("../assets/headerMobile7.png")}
            alt="item"
            onClick={() => setModalActive("chat")}
          /> */}
        </div>
      </div>
      <div className="forum-container">
        <div className="forum-container-content">
          <div className="rules">
            Forum Rules and Guidlines - Please Read Bafore Posting
            <ArrowRightIcon />
          </div>
          <RenderForum />
          <ForumDetail />
        </div>
        <div className="forum-container-sidebar">
          <div className="forum-section">
            <div className="forum-section-head">Popular now</div>
            <PopularTopicItem color={"mediumorchid"} />
            <PopularTopicItem color={"mediumorchid"} />
            <PopularTopicItem color={"mediumorchid"} />
          </div>
          <div className="forum-section">
            <div className="forum-section-head">Recently</div>
            <RecentlyTopicItem />
            <RecentlyTopicItem />
            <RecentlyTopicItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
