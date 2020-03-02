import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDoService } from './services/to-do.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  addUserForm: FormGroup;
  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      'todoValue': new FormControl(null, Validators.required)
    });
  }

  addTodoList() {
    const nextId = this.toDoService.toDoList[0].id + 1;
    this.toDoService.toDoList.push({ id: nextId, toDoValue: this.addUserForm.value.todoValue });
  }
}
