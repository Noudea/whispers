import IJournal from "../interfaces/IJournal"

class CreateJournalResponse {
  constructor(public readonly journal: IJournal) {}
}

export default CreateJournalResponse
