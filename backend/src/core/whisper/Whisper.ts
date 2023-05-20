import IWhisper from "./IWhisper";

class Whisper implements IWhisper{

  id:string;
  content: string;
  date: Date;
  isPrivate: boolean;

  constructor({id,content, date, isPrivate} :IWhisper) {
    this.id = id;
    this.content = content;
    this.date = date;
    this.isPrivate = isPrivate;
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

  getisPrivate(): boolean {
    return this.isPrivate;
  }

  get() :IWhisper {
    return {
      id: this.id,
      content: this.content,
      date: this.date,
      isPrivate: this.isPrivate
    }
  }
}


export default Whisper
