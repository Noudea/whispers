import IWhisper from "./IWhisper";

class Whisper implements IWhisper{

  id:string;
  content: string;
  date: Date;

  constructor({id,content, date} :IWhisper) {
    this.id = id;
    this.content = content;
    this.date = date;
  }

  getContent(): string {
    return this.content;
  }
  getDate(): Date {
    return this.date;
  }

  getId(): string {
    return this.id;
  }

  get() :IWhisper {
    return {
      id: this.id,
      content: this.content,
      date: this.date
    }
  }
}


export default Whisper
