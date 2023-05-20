import IJournal from "./IJournal";
import IWhisper from "../whisper/IWhisper";


class Journal implements IJournal{

  public id: string;
  public whispers: IWhisper[];

  constructor({id,whispers} : IJournal) {
    this.id = id;
    this.whispers = whispers;
  }
  getWhispers(): IWhisper[] {
      return this.whispers;
  }
  addWhisper(whisper: IWhisper): void {
      this.whispers.push(whisper);
  }

  getId(): string {
    return this.id;
  }

  get() :IJournal {
    return {
      id: this.id,
      whispers: this.whispers
    }
  }
}

export default Journal
