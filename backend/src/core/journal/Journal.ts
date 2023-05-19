import IJournal from "./IJournal";
import IWhisper from "../whisper/IWhisper";


class Journal implements IJournal{

  public whispers: IWhisper[];

  constructor({whispers} :{whispers : IWhisper[]}) {
      this.whispers = [];
  }
  listWhispers(): IWhisper[] {
      return this.whispers;
  }
  addWhispers(text) {
      this.whispers.push(text);
  }
}

export default Journal
