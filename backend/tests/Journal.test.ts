import Whisper from "../src/core/whisper/Whisper";
import {v4 as uuidv4} from 'uuid';
import Journal from "../src/core/journal/Journal";


describe('Journal', () => {

  const journalData = {
    id : uuidv4(),
    whispers: [
      new Whisper({
        id: uuidv4(),
        content: 'Test whisper content',
        date: new Date(),
        isPrivate : true
        }),
      new Whisper({
        id: uuidv4(),
        content: 'Test whisper content',
        date: new Date(),
        isPrivate : true
      })
    ]
  }

  it('should create a new instance of Journal with the correct values', () => {
    const journal = new Journal(journalData);
    expect(journal).toBeInstanceOf(Journal);
    expect(journal).toEqual(journalData)
  });

  it('should return the correct values when calling get() method', () => {
    const journal = new Journal(journalData);
    const journalObject = journal.get();
    expect(journalObject).toEqual(journalData);
  })

  it('should return the correct values when calling getId() method', () => {
    const journal = new Journal(journalData);
    const journalId = journal.getId();
    expect(journalId).toEqual(journalData.id);
  })

  it('should return the correct values when calling getWhispers() method', () => {
    const journal = new Journal(journalData);
    const whispers = journal.getWhispers();
    expect(whispers).toEqual(journalData.whispers);
  })

  it('should add a whisper to the journal', () => {
    const journal = new Journal({ id : journalData.id ,whispers: [...journalData.whispers] });
    const whisper = new Whisper({
      id: uuidv4(),
      content: 'Test whisper content',
      date: new Date(),
      isPrivate : true
    })
    journal.addWhisper(whisper);
    const whispers = journal.getWhispers();
    expect(whispers).toEqual([...journalData.whispers, whisper]);
  })

})
