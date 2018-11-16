import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Todo from '../todo.type';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  todo: Todo = { title: '', description: '', id: null, completed: false };

  constructor(private router: Router, private activeRoute: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        const id = parseInt(params['id'], 10);
        this.todoService.getTodoById(id).subscribe(_todo => {
          this.todo = _todo;
        });
      }
    });
  }

  addTodo(todo: Todo) {
    todo.id = Math.floor(100000 + Math.random() * 900000); // Generate the 6 digit random id
    this.todoService.addTodo(todo).subscribe(_todo => {
      this.todo = _todo;
      this.router.navigate(['/']);
      window.scrollTo(0, 0);
    });
  }

}
