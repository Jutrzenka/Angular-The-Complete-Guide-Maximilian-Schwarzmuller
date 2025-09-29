import { Component, input, signal } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  id = input.required<string>();
  name = input.required<string>();
  isAddingTask = signal<boolean>(false);

  constructor(private taskService: TasksService) {}

  selectedUserTasks = () => {
    const userTasksSignal = this.taskService.getUserTasks(this.id());
    return userTasksSignal(); // zwracam wartość
  };

  onCompleteTask = (id: string) => {
    this.taskService.removeTask(id);
  };

  onChangeStatusAddTask = () => {
    this.isAddingTask.update((flag) => !flag);
  };

  // Tutaj ważna strukturyzacja parametrów funkcji. Można to umieścić w .model jako oddzielny interface
  onAddNewTask = (taskData: { title: string; summary: string; dueDate: string }) => {
    this.taskService.addNewTask(taskData, this.id());
    this.isAddingTask.set(false);
  };
}
