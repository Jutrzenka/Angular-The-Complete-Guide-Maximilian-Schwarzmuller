import { Component, input, computed, signal } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_TASKS } from '../dummy';
import { NewTask } from './new-task/new-task';
import { type TaskInterface } from './task/task.model';

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

  // Tutaj ważna strukturyzacja parametrów funkcji. Można to umieścić w .model jako oddzielny interface
  onAddNewTask = (taskData: { title: string; summary: string; dueDate: string }) => {
    const newTask: TaskInterface = {
      id: `t${Date.now().toString()}`,
      userId: this.id(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };
    this.tasks.update((tasks) => {
      return tasks.concat(newTask);
    });
    this.isAddingTask.set(false);
  };
}
