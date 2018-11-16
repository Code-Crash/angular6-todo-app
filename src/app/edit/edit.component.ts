import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../_services/todo.service';
import Todo from '../todo.type';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  todo: Todo;

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

  editTodo(todo: Todo) {
    this.todoService.editTodo(todo).subscribe(_todo => {
      this.todo = _todo;
      this.router.navigate(['/']);
      window.scrollTo(0, 0);
    });
  }
}
