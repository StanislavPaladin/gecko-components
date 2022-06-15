import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import {
  ChatContext,
  SidebarContext,
  ModalsContext,
  SidebarHiddenContext,
  NotificationContext,
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  const [chatActive, setChatActive] = React.useState(window.innerWidth > 787 ? true : false);
  const [sidebarActive, setSidebarActive] = React.useState(false);
  const [sidebarHidden, setSidebarHidden] = React.useState(false);
  const [notificationActive, setNotificationActive] = React.useState(false);
  const [isModalActive, setModalActive] = React.useState("");

  return (
    <ChatContext.Provider value={{ chatActive, setChatActive }}>
      <SidebarContext.Provider value={{ sidebarActive, setSidebarActive }}>
        <ModalsContext.Provider value={{ isModalActive, setModalActive }}>
          <SidebarHiddenContext.Provider
            value={{ sidebarHidden, setSidebarHidden }}
          >
            <NotificationContext.Provider
              value={{ notificationActive, setNotificationActive }}
            >
              <React.StrictMode>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </React.StrictMode>
            </NotificationContext.Provider>
          </SidebarHiddenContext.Provider>
        </ModalsContext.Provider>
      </SidebarContext.Provider>
    </ChatContext.Provider>
  );
}

root.render(<Main />);
