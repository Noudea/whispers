import IWhisper from "../../whisper/interfaces/IWhisper"

interface IJournal {
  id: string;
  whispers: IWhisper[];
  userId: string;
}

export default IJournal
