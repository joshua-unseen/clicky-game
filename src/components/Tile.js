import React from "react";

function Tile(props) {
    return (
        <img
            src={props.url + "?text=" + props.id}
            id={props.id} className="img-thumbnail m-3 tile"
            alt="tile" onClick={props.clickHandler}
        />
    );
}

export default Tile