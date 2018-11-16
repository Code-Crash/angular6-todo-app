import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Todo from '../todo.type';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  todo: Todo = { title: '', description: '', id: null, completed: false };

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit() { }


  addTodo(todo: Todo) {
    todo.id = Math.floor(100000 + Math.random() * 900000); // Generate the 6 digit random id
    this.todoService.addTodo(todo).subscribe(_todo => {
      this.todo = _todo;
      this.router.navigate(['/']);
      window.scrollTo(0, 0);
    });
  }

}
