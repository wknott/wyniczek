import React from "react";
import meeple from "../../../images/meeple.svg";
import {
  StyledTile,
  Image,
  DefaultImage,
  DefaultImageContainer,
  GameName,
  StyledParagraph,
  GameDetails
} from "./styled";
import { Link } from "react-router-dom";
import { toGame } from "../../../routes";
import LastResult from "../LastResult";

const GameTile = ({ game, withoutLastResult }) => {

  return (
    game ?
      <StyledTile as={Link} to={toGame({ id: game._id })}>
        <Image url={game.imgUrl || meeple} />
        <GameDetails>
          <GameName>{game.name}</GameName>
          {!withoutLastResult && <LastResult lastResultDate={game.lastResultDate} />}
          {game.numberOfResults &&
            <StyledParagraph>
              Liczba wyników:{" "}
              <strong>{game.numberOfResults}</strong>
            </StyledParagraph>
          }
        </GameDetails>
      </StyledTile> :
      <></>
  );
};

export default GameTile;