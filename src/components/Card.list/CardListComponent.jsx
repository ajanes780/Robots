import React from "react";
import "./CardListComponentStyles.css";
import { Card } from "../CardComponent";

export const CardListComponent = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
