import React from "react";
import jdenticon from 'jdenticon';

jdenticon.config = {replaceMode: "observe"} // "observe" required to dynamically re-render SVG icons on new props.hash.

function TileImg(props) {
    return (
        <svg
            data-jdenticon-value={props.hash}
            width="150" height="150"
        >
            Need SVG support...
        </svg>
    );
}

export default TileImg;