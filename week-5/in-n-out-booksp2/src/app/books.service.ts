// /*
// ============================================
// ; Title: Exercise 5.3
// ; Author: Professor Krasso
// ; Date: 9 August 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: Data Tables
// ;===========================================
// */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;
  constructor() {
    this.books = [
      {
        isbn: '9780545582889',
        title: 'Harry Potter and the Sorcerers Stone',
        description:
          'A young boy, Harry Potter, discovers he is a wizard and engulfs on an adventure through magic, wizarding school, and facing his ultimate enemy who killed hid parents, Lord Voldemort.',
        numOfPages: 309,
        authors: ['J.K. Rowling'],
      },
      {
        isbn: '9780545582926',
        title: 'Harry Potter and the Chamber of Secrets',
        description:
          'Harry Potter and his friends discover that an evil has been set forth and threatens to close the school down if they do not find a way to eliminate it.',
        numOfPages: 341,
        authors: ['J.K. Rowling'],
      },
      {
        isbn: '9780545582933',
        title: 'Harry Potter and the Prisoner of Azkaban',
        description:
          'Harry discovers that he has an escapee God Father and is placed under the protection of his friends although they did not expect the sudden twist at the end',
        numOfPages: 435,
        authors: ['J.K. Rowling'],
      },
      {
        isbn: '9780545582957',
        title: 'Harry Potter and the Goblet of Fire',
        description:
          'There is a big game at Hogwarts that can also leave you in some grave danger. Harry competes in this game to an end you will not believe.',
        numOfPages: 734,
        authors: ['J.K. Rowling'],
      },
      {
        isbn: '9780545582971',
        title: 'Harry Potter and the Order of the Phoenix',
        description:
          'After Voldemort was reincarnated, Harry has to be protected from a secret group that he found out his parent were a part of.',
        numOfPages: 870,
        authors: ['J.K. Rowling'],
      },
      {
        isbn: '978545582995',
        title: 'Harry Potter and the Half-Blood Prince',
        description:
          'Dumbledore guides Harry on a crucial search of "Horcruxes" in order to stop Voldemort once and for all.',
        numOfPages: 652,
        authors: ['J.K. Rowling'],
      },
      {
        isbn: '978545583008',
        title: 'Harry Potter and the Deathly Hallows',
        description:
          'Harry and his friends set off on a search to find what are call the "deathly hallows" before voldemort is able to acquire them.',
        numOfPages: 749,
        authors: ['J.K. Rowling'],
      },
    ];
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
