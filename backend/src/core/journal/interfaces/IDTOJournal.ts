import IWhisper from "../../whisper/interfaces/IWhisper"

interface IDTOJournal {
    id: string;
    whispers: IWhisper[];
    userId: string;
}

export default IDTOJournal
