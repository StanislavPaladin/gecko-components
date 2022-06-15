import React from "react";

const ChatContext = React.createContext();
const SidebarContext = React.createContext();
const SidebarHiddenContext = React.createContext();
const ModalsContext = React.createContext();
const NotificationContext = React.createContext();

export {
  ChatContext,
  SidebarContext,
  ModalsContext,
  SidebarHiddenContext,
  NotificationContext,
};
