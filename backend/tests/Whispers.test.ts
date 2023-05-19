import Whisper from "../src/core/whisper/Whisper";
import {v4 as uuidv4} from 'uuid';

describe('Whisper', () => {
  const whisperData = {
    id: uuidv4(),
    content: 'Test whisper content',
    date: new Date(),
  };

  it('should create a new instance of Whisper with the correct values', () => {
    const whisper = new Whisper(whisperData);
    expect(whisper).toBeInstanceOf(Whisper);
    expect(whisper.getContent()).toBe(whisperData.content);
    expect(whisper.getDate()).toBe(whisperData.date);
    expect(whisper.getId()).toBe(whisperData.id);
    expect(whisper).toEqual(whisperData)
  });

  it('should return the correct values when calling get() method', () => {
    const whisper = new Whisper(whisperData);
    const whisperObject = whisper.get();
    expect(whisperObject).toEqual(whisperData);
  });
});
