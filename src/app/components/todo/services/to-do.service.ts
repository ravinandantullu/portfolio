import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {
    toDoList = [
        {
            id: 1,
            toDoValue: 'First Value'
        },
        {
            id: 2,
            toDoValue: 'Second Value'
        }
    ];
}
