import React from "react";

function Footer(props) {
    return (
        <div className="bg-primary fixed-bottom d-flex justify-content-between pt-1 pr-2">
            <span>
                <img src={props.logo} alt="logo" height="36" />
                <strong>Clicky Game</strong>
            </span>
            <span>powered by React | coded by joshua-unseen</span>
        </div>
    );
}

export default Footer