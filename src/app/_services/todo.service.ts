import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Todo from '../todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  /**
   * @description -- Add todo in storage and return it.
   * @param todo -- todo object
   */
  addTodo(todo: Todo): Observable<Todo> {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]'); // get all todos from localStorage
    todos.push(todo); // Add new Item
    localStorage.setItem('todos', JSON.stringify(todos)); // get all todos to localStorage
    return of(todo);
  }

  /**
   * @description -- This service will give you all the todos
   */
  getTodos(): Observable<Todo[]> {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    return of(todos);
  }

  /**
   * @description -- This service will help you to edit the todo
   * @param todo -- todo object
   */
  editTodo(todo: Todo): Observable<Todo> {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]'); // get all todos from localStorage
    for (let i = 0; i < todos.length; i++) {
      if (todo.id === todos[i].id) {
        todos[i].title = todo.title;
        todos[i].description = todo.description;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos)); // get all todos to localStorage
    return of(todo);
  }

  /**
   * @description -- This service will help you to delete todo by id
   * @param todoId -- todoId number
   */
  deleteTodoById(todoId: Number): Observable<boolean> {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]'); // get all todos from localStorage
    for (let i = 0; i < todos.length; i++) {
      if (todoId === todos[i].id) {
        todos.splice(i, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos)); // get all todos to localStorage
    return of(true);
  }

  /**
   * @description -- This service will help you to complete todo by id
   * @param todoId -- todoId number
   */
  markCompleteTodoById(todoId: Number): Observable<boolean> {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]'); // get all todos from localStorage
    for (let i = 0; i < todos.length; i++) {
      if (todoId === todos[i].id) {
        todos[i].completed = true;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos)); // get all todos to localStorage
    return of(true);
  }

  /**
   * @description -- This service will help you to mark un complete todo by id
   * @param todoId -- todoId number
   */
  markUnCompleteTodoById(todoId: Number): Observable<boolean> {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]'); // get all todos from localStorage
    for (let i = 0; i < todos.length; i++) {
      if (todoId === todos[i].id) {
        todos[i].completed = false;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos)); // get all todos to localStorage
    return of(true);
  }

  /**
   * @description -- This service will help you to get todo by id
   * @param todoId -- todoId number
   */
  getTodoById(todoId: Number): Observable<Todo> {
    console.log(todoId);
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const _todo_ = todos.filter((_todo) => {
      return todoId === _todo.id;
    });
    console.log(_todo_);
    return of(_todo_[0]);
  }

}
