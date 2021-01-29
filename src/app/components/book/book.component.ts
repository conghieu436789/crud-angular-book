import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books : Book[] = [];
  searchList !: Book[];
  public search !: string;
  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchList = [];
    this.bookService.getAllBooks().subscribe(data => {
        this.books = data;
        this.searchList = this.books;
      },
      error => {
        console.log(error);
      });
  }

  onSearch(): void {
    console.log(this.books);
    this.searchList = [];
    if (this.search) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].title.toLowerCase().includes(this.search)) {
          this.searchList.push(this.books[i]);
        }
      }
    } else if (this.search == '' || !this.search) {
      this.searchList = this.books;
    }
  }

  removeCity(id: number): void {
    this.router.navigateByUrl('delete')
  }

}
