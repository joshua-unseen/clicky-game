import React from "react";

function Tile(props) {
    return (
        <div>
            <p>This is tile {props.id}. It has {props.clicked ? "" : "not"} been clicked.</p>
        </div>
    );
}

export default Tile