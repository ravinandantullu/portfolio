import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoService } from './services/to-do.service';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './component/todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ToDoService],
  exports: [TodoComponent]
})
export class TodoModule { }
