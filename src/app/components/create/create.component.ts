import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: any = {};
  book!: Book;
  isCreateFailed = false;
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // @ts-ignore
    console.log(this.form);
    this.book = new Book(this.form.title, this.form.author, this.form.description)
    this.bookService.addBook(this.book).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/book');
        this.isCreateFailed = false;
      },
      error => {
        this.isCreateFailed = true;
        console.log(error);
      });
  }
}
