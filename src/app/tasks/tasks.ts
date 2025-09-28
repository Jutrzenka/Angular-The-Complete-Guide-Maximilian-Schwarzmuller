import { Component, input, computed, signal, output } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_TASKS } from '../dummy';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  id = input.required<string>();
  name = input.required<string>();
  tasks = signal(DUMMY_TASKS);
  isAddingTask = signal<boolean>(false);

  selectedUserTasks = computed(() => {
    return this.tasks().filter((task) => {
      return task.userId === this.id();
    });
  });

  onCompleteTask = (id: string) => {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  };

  onChangeStatusAddTask = () => {
    this.isAddingTask.update((flag) => !flag);
  };

  onAddNewTask = () => {
    this.tasks.update((tasks) => {
      return tasks.concat({
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
      });
    });
  };
}
