import IJournalRepository from "../interfaces/IJournalRepository"
import IJournal from "../interfaces/IJournal"

class JournalRepository implements IJournalRepository {

  async create(journal: IJournal): Promise<IJournal> {
    return journal
  }

  // async getById(id): Promise<IJournal> {
  //   return true as IJournal
  // }
  //
  // async update(id): Promise<IJournal> {
  //   return true as IJournal
  // }
  //
  // async delete(id): Promise<IJournal> {
  //   return true as IJournal
  // }

}


export default JournalRepository
