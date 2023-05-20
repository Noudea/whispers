import IJournal from "./IJournal";
import IWhisper from "../whisper/IWhisper";


class Journal implements IJournal{

  public whispers: IWhisper[];

  constructor({whispers} :{whispers : IWhisper[]}) {
      this.whispers = whispers;
  }
  getWhispers(): IWhisper[] {
      return this.whispers;
  }
  addWhisper(whisper: IWhisper): void {
      this.whispers.push(whisper);
  }

  get() :IJournal {
    return {
      whispers: this.whispers
    }
  }
}

export default Journal
