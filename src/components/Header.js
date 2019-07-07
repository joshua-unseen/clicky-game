import React from "react";

function Header(props) {
    return (
        <div>
            <p>
                Score: <span>{props.score}</span> High Score: <span>{props.hiScore}</span>
            </p>
        </div>
    );
}

export default Header