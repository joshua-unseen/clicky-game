import React from "react";

function Header(props) {
    return (
        <div className="navbar sticky-top text-light bg-primary">
            <p>
                Score: <span>{props.score}</span> | High Score: <span>{props.hiScore}</span>
            </p>
        </div>
    );
}

export default Header