import Journal from "../entities/Journal"
import IDTOJournal from "../interfaces/IDTOJournal"
import IWhisper from "../../whisper/interfaces/IWhisper"

class JournalMapper {
  public static toDomain(raw: {
    id: string,
    whispers: IWhisper[],
    userId: string
  }): Journal {
    return new Journal({
      id: raw.id,
      whispers: raw.whispers,
      userId: raw.userId,
    })
  }

  public static toDTO(journal: Journal): IDTOJournal {
    return {
      id: journal.id,
      whispers: journal.whispers,
      userId: journal.userId,
    }
  }
}


export default JournalMapper
