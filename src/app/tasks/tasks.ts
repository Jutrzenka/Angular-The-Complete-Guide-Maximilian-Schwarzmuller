import { Component, input, computed, effect, signal } from '@angular/core';
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
  tasks = signal(DUMMY_TASKS);

  selectedUserTasks = computed(() => {
    return this.tasks().filter((task) => {
      return task.userId === this.id();
    });
  });

  onCompleteTask = (id: string) => {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  };
}
