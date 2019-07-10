import React from "react";

function Header(props) {
    let headerClass = "";
    switch (props.headerText) {
        case "Fail!":
            headerClass = "fail";
            break;
        case "Nice!":
            headerClass = "nice";
            break;
        default:
            break;
    }
    return (
        <div className="navbar sticky-top text-light bg-primary">
            <h1>Clicky Game</h1>
            <h3 className={headerClass}>{props.headerText}</h3>
            <h5>Score: {props.score} | High Score: {props.hiScore}</h5>
        </div>
    );
}

export default Header