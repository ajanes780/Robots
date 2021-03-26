import React from "react";
import "./CardListComponentStyles.css";

export const CardListComponent = (props) => {
  return <div className="card-list">{props.children}</div>;
};
