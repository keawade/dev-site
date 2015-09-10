function bigBang(choice1) {
    var options = ["Paper", "Rock", "Lizard", "Spock", "Scissors"];
    var outcomes = [" ties with ", " beats ", " loses to "];
    var i = Math.floor(Math.random() * 5);
    var randomChoice = options[i];
    var index1 = options.indexOf(choice1),
        index2 = options.indexOf(randomChoice),
        dif = index2 - index1;
    if(dif < 0) {
        dif += options.length;
    }
    while(dif > 2) {
        dif -= 2;
    }
    var result = {
        userchoice: choice1,
        result: outcomes[dif],
        compchoice: randomChoice
    };
    return result;
}

var App = React.createClass({
    btnstates: ["btn btn-default btn-lg", "btn btn-default btn-lg btn-danger", "btn btn-default btn-lg btn-success", "btn btn-default btn-lg btn-info"],
    getInitialState: function(){
        return {
            rock: this.btnstates[0],
            paper: this.btnstates[0],
            scissors: this.btnstates[0],
            lizard: this.btnstates[0],
            spock: this.btnstates[0],
            outcome: "Choose your weapon!",
						streak: 0
        };
    },
    reset: function(){
        this.setState({
            rock: this.btnstates[0],
            paper: this.btnstates[0],
            scissors: this.btnstates[0],
            lizard: this.btnstates[0],
            spock: this.btnstates[0]
        });
    },
    rock: function(e){
        this.reset();
        var result = bigBang("Rock");
        if (result.result == " beats ") {
            this.setState({
                rock: this.btnstates[2],
								streak: this.state.streak + 1
            });
        } else if (result.result == " loses to ") {
            this.setState({
                rock: this.btnstates[1],
								streak: 0
            });
        } else {
            this.setState({
                rock: this.btnstates[3]
            });
        }
        this.setState({outcome: result.userchoice + result.result + result.compchoice + "!"});
    },
    paper: function(e){
        this.reset();
        var result = bigBang("Paper");
        if (result.result == " beats ") {
            this.setState({
                paper: this.btnstates[2],
								streak: this.state.streak + 1
            });
        } else if (result.result == " loses to ") {
            this.setState({
                paper: this.btnstates[1],
								streak: 0
            });
        } else {
            this.setState({
                paper: this.btnstates[3]
            });
        }
        this.setState({outcome: result.userchoice + result.result + result.compchoice + "!"});
    },
    scissors: function(e){
        this.reset();
        var result = bigBang("Scissors");
        if (result.result == " beats ") {
            this.setState({
                scissors: this.btnstates[2],
								streak: this.state.streak + 1
            });
        } else if (result.result == " loses to ") {
            this.setState({
                scissors: this.btnstates[1],
								streak: 0
            });
        } else {
            this.setState({
                scissors: this.btnstates[3]
            });
        }
        this.setState({outcome: result.userchoice + result.result + result.compchoice + "!"});
    },
    lizard: function(e){
        this.reset();
        var result = bigBang("Lizard");
        if (result.result == " beats ") {
            this.setState({
                lizard: this.btnstates[2],
								streak: this.state.streak + 1
            });
        } else if (result.result == " loses to ") {
            this.setState({
                lizard: this.btnstates[1],
								streak: 0
            });
        } else {
            this.setState({
                lizard: this.btnstates[3]
            });
        }
        this.setState({outcome: result.userchoice + result.result + result.compchoice + "!"});
    },
    spock: function(e){
        this.reset();
        var result = bigBang("Spock");
        if (result.result == " beats ") {
            this.setState({
                spock: this.btnstates[2],
								streak: this.state.streak + 1
            });
        } else if (result.result == " loses to ") {
            this.setState({
                spock: this.btnstates[1],
								streak: 0
            });
        } else {
            this.setState({
                spock: this.btnstates[3]
            });
        }
        this.setState({outcome: result.userchoice + result.result + result.compchoice + "!"});
    },
    render: function(){
        return (
            <div className="text-center">
                <h1>Rock - Paper - Scissors - Lizard - Spock</h1>
                <div className="btn-group" role="group" aria-label="...">
                    <button className={this.state.rock} onClick={this.rock}>
                        <span className="fa-stack fa-5x">
                            <i className="fa fa-square-o fa-stack-2x"></i>
                            <i className="fa fa-hand-rock-o fa-stack-1x"></i>
                        </span>
                    </button>
                    <button id="paper" className={this.state.paper} onClick={this.paper}>
                        <span className="fa-stack fa-5x">
                            <i className="fa fa-square-o fa-stack-2x"></i>
                            <i className="fa fa-hand-paper-o fa-stack-1x"></i>
                        </span>
                    </button>
                    <button id="scissors" className={this.state.scissors} onClick={this.scissors}>
                        <span className="fa-stack fa-5x">
                            <i className="fa fa-square-o fa-stack-2x"></i>
                            <i className="fa fa-hand-scissors-o fa-stack-1x"></i>
                        </span>
                    </button>
                    <button id="lizard" className={this.state.lizard} onClick={this.lizard}>
                        <span className="fa-stack fa-5x">
                            <i className="fa fa-square-o fa-stack-2x"></i>
                            <i className="fa fa-hand-lizard-o fa-stack-1x"></i>
                        </span>
                    </button>
                    <button id="spock" className={this.state.spock} onClick={this.spock}>
                        <span className="fa-stack fa-5x">
                            <i className="fa fa-square-o fa-stack-2x"></i>
                            <i className="fa fa-hand-spock-o fa-stack-1x"></i>
                        </span>
                    </button>
                </div>
                <h1>{this.state.outcome}</h1>
                <h2>Current streak is {this.state.streak} wins!</h2>
            </div>
      );
    }
});
React.render(<App />, document.getElementById('rpsls'));
