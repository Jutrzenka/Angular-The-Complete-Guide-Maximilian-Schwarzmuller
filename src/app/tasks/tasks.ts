import { Component, input, signal, computed } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_TASKS } from '../dummy';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  id = input.required<string>();
  name = input.required<string>();
  selectedUserTasks = computed(() => {
    return DUMMY_TASKS.filter((task) => {
      return task.userId === this.id();
    });
  });
}
