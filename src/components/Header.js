import React from "react";

class Header extends React.Component {
    state = {
        headerClass: "",
        headerText: "Click a Tile to Begin"
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props);
        // console.log(prevProps);
        if (this.props !== prevProps) {
            if (this.props.lost) {
                this.setState({ headerClass: "fail", headerText: "Fail!" });
            }
            else if (this.props.won) {
                this.setState({ headerClass: "nice", headerText: "Win!"});
            }
            else if (this.props.score) {
                this.setState({ headerClass: "nice", headerText: "Nice!" });
            }
        }
        else if (this.state.headerClass) {
            setTimeout(() => {
                this.setState({ headerClass: "" });
            }, 500);
        }
    }
    render() {
        return (
            <div className="navbar sticky-top text-light bg-primary">
                <h1>Clicky Game</h1>
                <h3 className={this.state.headerClass}>{this.state.headerText}</h3>
                <h5>Score: {this.props.score} | High Score: {this.props.hiScore}</h5>
            </div>
        );
    }
}

export default Header