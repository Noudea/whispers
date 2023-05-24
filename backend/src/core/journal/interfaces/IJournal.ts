import IWhisper from "../../whisper/interfaces/IWhisper"

interface IJournal {
  id: string;
  whispers: IWhisper[];
}

export default IJournal
