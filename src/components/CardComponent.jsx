import react from "react";
import "./CardComponentStyles.css";
export const Card = (props) => {
  return (
    <div class="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set1&size=150x150`}
        alt=""
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.company.catchPhrase}</p>
      <p>{props.monster.email}</p>
    </div>
  );
};
