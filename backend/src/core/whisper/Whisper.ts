import IWhisper from "./IWhisper";

class Whisper implements IWhisper{

  content: string;
  date: Date;

  constructor({content, date} :IWhisper) {
    this.content = content;
    this.date = date;
  }

  getContent(): string {
    return this.content;
  }
  getDate(): Date {
    return this.date;
  }

  get() :IWhisper {
    return {
      content: this.content,
      date: this.date
    }
  }
}


export default Whisper
