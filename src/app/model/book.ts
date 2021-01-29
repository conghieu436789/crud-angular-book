export class Book {
  public id?: number;
  public title?: string;
  public author?: string;
  public description?: string;

  constructor(title: string, author: string, description: string) {
    this.title = title;
    this.author = author;
    this.description = description;
  }
}
