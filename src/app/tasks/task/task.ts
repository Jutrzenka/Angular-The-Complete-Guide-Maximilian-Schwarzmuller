import { Component, input } from '@angular/core';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  title = input.required<string>();
  summary = input.required<string>();
  time = input.required<string>();
}
