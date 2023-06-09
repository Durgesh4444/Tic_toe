import { Component } from "react";
import Status from "./Component/Status";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null,
    };
  }

  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];
    this.checkMatch(winLines);
  }

  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({
          winner: this.state.player,
        });
        alert(`${this.state.player} Won`);
      }
    }
  }

  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X",
        });
        this.checkWinner();
      }
    }
  }
  setPlayer(player) {
    this.setState({ player });
  }
  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div
        className="box w-20 h-20 border-[1px] border-solid border-black flex justify-center items-center"
        key={index}
        onClick={() => this.handleClick(index)}
      >
        {box}{" "}
      </div>
    ));
  }
  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null),
    });
  }
  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[50px] py-5 font-bold ">Let's Play Tic Tac Toe</h1>
        <Status
          player={this.state.player}
          setPlayer={(e) => {
            this.setPlayer(e);
          }}
          winner={this.state.winner}
        />
        <div className="flex flex-wrap w-60 bg-blue-300">
          {this.renderBoxes()}
        </div>
        <button
          className="bg-[#174373] mt-6 py-2 px-4 rounded drop-shadow-md hover:bg-[#23bcd7] transition-all duration-200 text-white"
          onClick={() => this.reset()}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;