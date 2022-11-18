import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  template: `
    <div>
      <h1>Home</h1>
      <h3>Total users: # {{users?.length}}</h3>
      <a routerLink ='/test' >click me test </a>
      <button (click)='hello()'> test </button>  
    </div>
  `,
})
export class HomeViewComponent {
  users;

  constructor(private http: Http) {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .map((res) => res.json())
      .subscribe((res) => (this.users = res));
  }
  hello() {
    console.log('hello');
  }
}
