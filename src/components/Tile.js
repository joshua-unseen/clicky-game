import React from "react";
import TileImg from "./TileImg";

function Tile(props) {
    // console.log(props.seed);
    return (
        // <img
        //     src={props.url + "?text=" + props.id}
        //     id={props.id} className="img-thumbnail m-3 tile"
        //     alt="tile" onClick={props.clickHandler}
        // />
        <div
            id={props.id}
            className="img-thumbnail m-3 tile"
            alt="tile"
            onClick={props.clickHandler}
        >
            <TileImg hash={props.id + props.seed} />
        </div>
    );
}

export default Tile