import IWhisper from "../../whisper/interfaces/IWhisper"

class CreateJournalRequest {

  public readonly id: string
  public readonly whispers: IWhisper[]
  public readonly userId: string


  constructor({
    id,
    whispers,
    userId}) {
    this.id = id
    this.whispers = whispers
    this.userId = userId
  }
}

export default CreateJournalRequest
