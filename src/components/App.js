import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            x : 0,
			y: 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderChoice.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
		this.reset = this.reset.bind(this)
    };

reset(){
	
}
    buttonClickHandler() {
    
    }
    renderChoice() {
        if (this.state.renderBall === false) {
            return <button onClick={this.buttonClickHandler} className="ballProvider" >Make a Ball</button>
        }
        else if (this.state.renderBall === true) {
            return <div className="ball" style={this.state.ballPosition}></div>
        }
    }

    componentDidMount() {
        
	
	}

    render() {
        return (
            <div className="playground">
			<button onClick={this.reset} className="ballProvider2">Reset</button>
                {this.renderChoice()}
            </div>
			
        )
    }
}


export default App;
