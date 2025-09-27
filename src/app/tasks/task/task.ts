import { Component, input } from '@angular/core';
import { TaskInterface } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  task = input.required<TaskInterface>();
}
