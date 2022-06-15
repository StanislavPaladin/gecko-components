import React, { useContext } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { ModalsContext, ChatContext, SidebarHiddenContext } from "./context";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Main from "./pages/Main";
import AllSlots from "./pages/AllSlots";
import BetsBlock from "./components/UI/BetsBlock";
import OpenGame from "./pages/OpenGame";
import Affiliate from "./pages/Affiliate";
import StandartPolicy from "./pages/StandartPolicy";
import VipClub from "./pages/VipClub";
import Lottery from "./pages/Lottery";
import Promotion from "./pages/Promotion";
import SportBet from "./pages/SportBet";
import Sport from "./pages/Sport";
import Forum from "./pages/Forum";
import RecentPlay from "./pages/RecentPlay";
import SportSearch from "./pages/SportSearch";
import ForumDetail from "./components/Forum/ForumDetail";
import Footer from "./components/Footer";
import SignIn from "./components/Modals/SignIn";
import SignUp from "./components/Modals/SignUp";
import PromotionsModal from "./components/Modals/PromotionsModal";
import WalletDeposit from "./components/Modals/WalletDeposit";
import ChatModal from "./components/Modals/ChatModal";
import Preloader from "./components/Preloader";

import "./App.scss";
import Other from "./pages/Other";

const RenderMain = () => {
  return (
    <>
      <Main />
      <BetsBlock />
    </>
  );
};

function App() {
  const { isModalActive, setModalActive } = useContext(ModalsContext);
  const { chatActive, setChatActive } = useContext(ChatContext);
  const { sidebarHidden, setSidebarHidden } = useContext(SidebarHiddenContext);
  const [loading, setLoading] = React.useState(false);
  const { pathname } = useLocation();

  const handleLoading = () => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1500);
  };

  React.useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1500);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Preloader active={loading} />
      <Sidebar handleLoading={handleLoading} />
      <div className={`content ${sidebarHidden ? "sidebarHidden" : ""} ${!chatActive ? "chatHidden" : ""}`}>
        <Header />
        <div className="content-inner">
          <div className={`page ${!chatActive ? "full" : ""}`}>
            <img src={require("./assets/backgrounds/main/bg1.png")} alt="bg" className="bg" />
            <Routes>
              <Route path="/" exact element={<RenderMain />} />
              <Route path="/allSlots" exact element={<AllSlots />} />
              <Route path="/openGame" exact element={<OpenGame />} />
              <Route path="/affiliate" exact element={<Affiliate />} />
              <Route
                path="/standartPolicy"
                exact
                element={<StandartPolicy />}
              />
              <Route path="/vipClub" exact element={<VipClub />} />
              <Route path="/lottery" exact element={<Lottery />} />
              <Route path="/promotion" exact element={<Promotion />} />
              <Route path="/sport" exact element={<Sport />} />
              <Route path="/sportBet" exact element={<SportBet />} />
              <Route path="/sportSearch" exact element={<SportSearch />} />
              <Route path="/recentPlay" exact element={<RecentPlay route="Recent play" />} />
              <Route path="/favoriteGames" exact element={<RecentPlay route="Favorite games" />} />
              <Route path="/collectComponents" exact element={<Other />} />
            </Routes>


            <Footer chatActive={chatActive} />
          </div>
          <Chat />
        </div>
        {isModalActive && (
          <div className="modal-wrap">
            {isModalActive == "signIn" && <SignIn />}
            {isModalActive == "signUp" && <SignUp />}
            {isModalActive == "wallet" && <WalletDeposit />}
            {isModalActive == "chat" && <ChatModal />}
            {isModalActive == "promotions" && <PromotionsModal />}
          </div>
        )}

        {/* <Forum/>
        <Footer/> */}
      </div>
    </div>
  );
}

export default App;
