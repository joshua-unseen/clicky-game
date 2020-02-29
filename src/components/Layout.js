import React from "react";
import Tile from "./Tile";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderTiles(tiles, clickHandler, seed) {
    // console.log(seed);
    shuffleArray(tiles);
    const tilesArray = tiles.map(tile => {
        return (
            <Tile key={tile.id} id={tile.id} url={tile.url} clicked={tile.clicked} clickHandler={clickHandler} seed={seed} />
        );
    });
    return tilesArray;
}

function Layout(props) {
    return (
        <div className={"container d-flex flex-wrap justify-content-center mb-5" + (props.lost ? " shaky" : "")}>
            {/* <p>This is the tile layout</p> */}
            {renderTiles(props.tiles, props.clickHandler, props.seed)}
        </div>
    );
}

export default Layout