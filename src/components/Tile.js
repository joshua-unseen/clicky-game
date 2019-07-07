import React from "react";

function Tile(props) {
    return (
        // <div className="card">
            <img src={props.url + "?text=" + props.id} className="img-thumbnail m-3 tile" alt="tile" />
        //     <div className="card-img-overlay">
        //         <p>This is tile {props.id}.</p>
        //         <p>It has {props.clicked ? "" : "not"} been clicked.</p>
        //     </div>
        // </div>
    );
}

export default Tile