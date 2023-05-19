import Whisper from "../src/core/whisper/Whisper";

describe('Whisper', () => {
  const whisperData = {
    content: 'Test whisper content',
    date: new Date(),
  };

  it('should create a new instance of Whisper', () => {
    const whisper = new Whisper(whisperData);
    expect(whisper).toBeInstanceOf(Whisper);
    expect(whisper.getContent()).toBe(whisperData.content);
    expect(whisper.getDate()).toBe(whisperData.date);
  });

  it('should return the correct values when calling get() method', () => {
    const whisper = new Whisper(whisperData);
    const whisperObject = whisper.get();
    expect(whisperObject).toEqual(whisperData);
  });
});
