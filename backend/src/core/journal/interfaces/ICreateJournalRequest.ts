import IWhisper from "../../whisper/interfaces/IWhisper"

interface ICreateJournalRequest {
  id: string;
  whispers: IWhisper[];
  userId: string;
}

export default ICreateJournalRequest
