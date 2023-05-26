import JournalRepository from "../src/core/journal/repositories/JournalRepository"
import CreateJournalUseCase from "../src/core/journal/usecases/CreateJournal"
import CreateJournalRequest from "../src/core/journal/usecases/CreateJournalRequest"
import CreateJournalResponse from "../src/core/journal/usecases/CreateJournalResponse"
import IJournal from "../src/core/journal/interfaces/IJournal"

const sampleJournal: IJournal = { id: 'test',whispers: [],userId: 'test' }

jest.mock('../src/core/journal/repositories/JournalRepository',() => {
  return jest.fn().mockImplementation(() => {
    return {
      create: jest.fn().mockImplementation(() => {
        return sampleJournal
      })
    }
  })
})


describe('CreateJournalUseCase', () => {

  it('constructor of CreateJournalResponse should set journal property correctly', () => {
    // Create an instance of CreateJournalResponse
    const response = new CreateJournalResponse(sampleJournal)
    // Assert that the journal property is set correctly
    expect(response.journal).toBe(sampleJournal)
  })

  it('should call journalRepository.create() method when calling execute() method', async() => {
    const journalRepository = new JournalRepository()
    const createJournalRequest = new CreateJournalRequest(sampleJournal)
    const createJournalUseCase = new CreateJournalUseCase({request: createJournalRequest,repository: journalRepository})
    await createJournalUseCase.execute()
    expect(journalRepository.create).toHaveBeenCalled()
  })


  it('should return a CreateJournalResponse object when calling execute() method', async() => {
    const journalRepository = new JournalRepository()
    const createJournalRequest = new CreateJournalRequest(sampleJournal)
    const createJournalUseCase = new CreateJournalUseCase({request: createJournalRequest,repository: journalRepository})
    const createJournalResponse = await createJournalUseCase.execute()
    expect(createJournalResponse).toBeInstanceOf(CreateJournalResponse)
  })

})
