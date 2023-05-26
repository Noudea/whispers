import ICreateJournalResponse from "../interfaces/ICreateJournalResponse"
import ICreateJournalRequest from "../interfaces/ICreateJournalRequest"
import IJournalRepository from "../interfaces/IJournalRepository"
import Journal from "../entities/Journal"
import CreateJournalResponse from "./CreateJournalResponse"

class CreateJournalUseCase {

  private request: ICreateJournalRequest
  private repository: IJournalRepository

  constructor({request,repository}: {request: ICreateJournalRequest,repository: IJournalRepository}) {
    this.request = request,
    this.repository = repository
  }

  execute = async () :Promise<ICreateJournalResponse> => {
    const {id,whispers,userId} = this.request
    const journal = new Journal({id,whispers,userId})
    const savedJournal = await this.repository.create(journal)
    return new CreateJournalResponse(savedJournal)
  }

}


export default CreateJournalUseCase
