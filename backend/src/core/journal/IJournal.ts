import IWhisper from "../whisper/IWhisper";

interface IJournal {
  id: string;
  whispers: IWhisper[];
}

export default IJournal
