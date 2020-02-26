import React from "react";
import 'jdenticon';

function Tile(props) {
    console.log(props.seed);
    return (
        // <img
        //     src={props.url + "text=" + props.id}
        //     id={props.id} className="img-thumbnail m-3 tile"
        //     alt="tile" onClick={props.clickHandler}
        // />
        <div
            id={props.id}
            className="img-thumbnail m-3 tile"
            alt="tile"
            onClick={props.clickHandler}
            >
            <svg
                data-jdenticon-value={props.id + props.seed}
                width="150" height="150"
            >
                Need SVG support...
            </svg>
        </div>
    );
}

export default Tile