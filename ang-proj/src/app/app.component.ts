import { Component } from '@angular/core';
import { Todo } from "./todo"; // import our Model

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ang-proj';
  
  todoValue:string;
  list:Todo[];

  // lifecycle method for Angular
  ngOnInit() {
    this.list = [];
    this.todoValue = "";
  }

  // add todo item
  addTodoItem() {
    if (this.todoValue !== "") {

      // create new todo item
      const newTodoItem:Todo = {
        id:Date.now(),
        value:this.todoValue,
        isDone:false,
      }

      // add to our list
      this.list.push(newTodoItem);
    }

    // reset input field
    this.todoValue = "";
  }

  // delete todo item
  deleteTodoItem(id:number) {
    this.list = this.list.filter(item => item.id !== id);
  }

  // clear all items
  clearAll() {
    this.list = [];
  } 

}