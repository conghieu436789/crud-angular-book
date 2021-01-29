import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public API = 'http://localhost:3000/books';
  constructor(
    private http: HttpClient,
  ) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API);
  }
  getBook(id: any): Observable<Book> {
    return this.http.get<Book>(`${this.API}/${id}`);
  }

  handleError(err: any): void {
    if (err.error instanceof Error) {
      console.log(`Client side error: ${err.error.message}`);
    } else {
      console.log(`Serve side error: ${err.status} - ${err.error}`);
    }
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.API, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API}/${id}`, book);
  }
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.API}/${id}`);
  }

}
