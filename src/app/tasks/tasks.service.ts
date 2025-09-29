import { computed, Injectable, signal } from '@angular/core';
import { type TaskInterface } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal<TaskInterface[]>([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  getUserTasks(userId: string) {
    return computed(() => this.tasks().filter((task) => task.userId === userId));
  }

  // Tutaj ważna strukturyzacja parametrów funkcji. Można to umieścić w .model jako oddzielny interface
  addNewTask(taskData: { title: string; summary: string; dueDate: string }, userId: string) {
    const newTask: TaskInterface = {
      id: `t${Date.now().toString()}`,
      userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  removeTask(id: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }
}
