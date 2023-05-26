import IJournalRepository from "../interfaces/IJournalRepository"
import IJournal from "../interfaces/IJournal"

class JournalRepository implements IJournalRepository {

  async create(journal: IJournal): Promise<IJournal> {
    return journal
  }
}


export default JournalRepository
