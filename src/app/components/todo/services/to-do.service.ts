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
        },
        {
            id: 3,
            toDoValue: 'Second Value'
        },
        {
            id: 4,
            toDoValue: 'Second Value'
        },
        {
            id: 5,
            toDoValue: 'Second Value'
        },
        {
            id: 6,
            toDoValue: 'Second Value'
        },
        {
            id: 7,
            toDoValue: 'Second Value'
        }
    ];
}
