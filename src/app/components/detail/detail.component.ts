import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: '',
  };
  id = 0;
  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
        this.id = data.id;
        // tslint:disable-next-line:no-shadowed-variable
      },
      error => {
        console.log(error);
      });

    this.bookService.getBook(this.id).subscribe(data => {
      this.book = data;
      console.log(this.book);
    }, error => {
      console.log(error);
    });
  }

}
