import { Component } from "react";

class Player extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render() {
    return (
      <>
      <h1 className="text-center text-[30px]" >Please Select A Player</h1>
      <form
        onSubmit={(e) => this.handleForm(e)}
        className="flex justify-center items-center gap-10 p-4"
      >
        
        <label className="flex flex-col bg-[#47ef7f] p-2 rounded drop-shadow cursor-pointer">
          <input className="" type="radio" name="player" value="X" />
          Player 1
        </label>
        <label className="flex flex-col bg-[#47ef7f] p-2 rounded drop-shadow cursor-pointer">
          <input className="" type="radio" name="player" value="O" />
          Player 2
        </label>
        <button
          className="bg-[#0c204b] py-2 px-4 text-white rounded drop-shadow-md hover:bg-[#0b1326] transition-all duration-200"
          type="submit"
          value="Start"
        >
          Start
        </button>
      </form>
      </>
    );
  }
}

export default Player;