import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../_services/todo.service';
import Todo from '../todo.type';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  goToEdit(todo): void {
    this.router.navigate(['/todo/', todo.id]);
  }

  toDelete(todo): void {
    this.todoService.deleteTodoById(todo.id).subscribe(_todo => {
      console.log('Todo Deleted, id:', todo.id);
      for (let i = 0; i < this.todos.length; i++) {
        if (todo.id === this.todos[i].id) {
          this.todos.splice(i, 1);
        }
      }
    });
  }

  markComplete(todo): void {
    this.todoService.markCompleteTodoById(todo.id).subscribe(_todo => {
      console.log('Todo Deleted, id:', todo.id);
      for (let i = 0; i < this.todos.length; i++) {
        if (todo.id === this.todos[i].id) {
          this.todos[i].completed = true;
        }
      }
    });
  }

  markUnComplete(todo): void {
    this.todoService.markUnCompleteTodoById(todo.id).subscribe(_todo => {
      console.log('Todo Deleted, id:', todo.id);
      for (let i = 0; i < this.todos.length; i++) {
        if (todo.id === this.todos[i].id) {
          this.todos[i].completed = false;
        }
      }
    });
  }

}
