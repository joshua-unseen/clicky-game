import React from "react";
import Tile from "./Tile";

function renderTiles(tiles) {
    const tilesArray = tiles.map(tile => {
        return (
            <Tile key={tile.id} id={tile.id} url={tile.url} clicked={tile.clicked} />
        );
    });
    return tilesArray;
}

function Layout(props) {
    return (
        <div className="container d-flex flex-wrap justify-content-center">
            {/* <p>This is the tile layout</p> */}
            {renderTiles(props.tiles)}
        </div>
    );
}

export default Layout