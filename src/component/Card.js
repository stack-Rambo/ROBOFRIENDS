import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-3">
      <img alt="Image1 pic" src={`https://robohash.org/{props.id}?200*200`} />
      <div>
        <p>{id}</p>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
