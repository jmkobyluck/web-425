// /*
// ============================================
// ; Title: Assignment 1.4
// ; Author: Professor Krasso
// ; Date: 09 July 2020
// ; Modified By: Jonathan Kobyluck
// ; Description: TypeScript
// ;===========================================
// */

import { IPerson } from "./person.interface";

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myName = new Person("Jonathan", "Kobyluck");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
