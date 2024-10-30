export class TicTacToe {
  getBoard() {
    return "1|2|3\n-----\n4|5|6\n-----\n7|8|9"
  }

  getStatus() {
    return "playing"
  }

  playIn(position: number) {
    throw new Error("Not implemented")
  }
}
