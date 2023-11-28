import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon;

  //When clicked, the card should toggle between displaying the front and back sprites
  const [showImg, setShowImg] = useState(true);

  return (
    <Card>
      <div onClick={() => setShowImg(!showImg)}>
        <div className="image">
          <img alt={name} src={showImg ? sprites.front : sprites.back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
