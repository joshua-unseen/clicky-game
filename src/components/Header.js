import React from "react";

function Header(props) {
    return (
        <div className="navbar sticky-top text-light bg-primary">
            <h1>Clicky Game</h1>
            <h3>Click a Tile to Begin</h3>
            <h5>Score: {props.score} | High Score: {props.hiScore}</h5>
        </div>
    );
}

export default Header