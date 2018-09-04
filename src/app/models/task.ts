export class Task {
  title: string;
  done: boolean;
  tags: string[];
  category: string;
  
  constructor(title?: string) {
      this.title = title || '';
      this.done = false;
      this.category = 'Inbox';
      this.tags = [];
  }
}