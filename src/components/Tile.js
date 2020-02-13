import React from "react";
import 'jdenticon';

function Tile(props) {
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
                data-jdenticon-value={props.id}
                width="150" height="150"
            >
                Need SVG support...
            </svg>
        </div>
    );
}

export default Tile