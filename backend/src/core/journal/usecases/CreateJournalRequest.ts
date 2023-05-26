import IWhisper from "../../whisper/interfaces/IWhisper"
import ICreateJournalRequest from "../interfaces/ICreateJournalRequest"

class CreateJournalRequest implements ICreateJournalRequest{

  public readonly id: string
  public readonly whispers: IWhisper[]
  public readonly userId: string


  constructor({
    id,
    whispers,
    userId}: ICreateJournalRequest) {
    this.id = id
    this.whispers = whispers
    this.userId = userId
  }
}

export default CreateJournalRequest
