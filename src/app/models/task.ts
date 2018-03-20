export class Task {
  title: string;
  done: boolean;
  
  constructor(title?: string) {
      this.title = title || '';
      this.done = false;
  }
}