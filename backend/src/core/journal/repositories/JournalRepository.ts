import IJournalRepository from "../interfaces/IJournalRepository"
import IJournal from "../interfaces/IJournal"

class JournalRepository implements IJournalRepository {

  // public test: string
  //
  // constructor(test:string) {
  //   this.test = test
  // }


  async create(journal: IJournal): Promise<IJournal> {
    //persist to database
    //data to domain
    //return domain journal
    return journal
  }
}


export default JournalRepository
