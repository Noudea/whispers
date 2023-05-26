import IJournal from "../interfaces/IJournal"
import IWhisper from "../../whisper/interfaces/IWhisper"


class Journal implements IJournal{

  public id: string
  public whispers: IWhisper[]
  public userId: string

  constructor({id,whispers,userId} : IJournal) {
    this.id = id
    this.whispers = whispers,
    this.userId = userId
  }
  getWhispers(): IWhisper[] {
    return this.whispers
  }
  addWhisper(whisper: IWhisper): void {
    this.whispers.push(whisper)
  }

  getId(): string {
    return this.id
  }

  get() :IJournal {
    return this
  }
}

export default Journal
