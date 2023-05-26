import IJournal from "../interfaces/IJournal"

const DTOJournal = (journal: IJournal) => {
  return {
    id: journal.id,
    whispers: journal.whispers,
    userId: journal.userId
  }
}

export default DTOJournal
