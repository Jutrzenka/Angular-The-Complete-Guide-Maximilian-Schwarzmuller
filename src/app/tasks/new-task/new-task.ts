import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  private tasksService = inject(TasksService);

  cancel = output<boolean>();
  userId = input.required<string>();

  title = signal<string>('');
  summary = signal<string>('');
  dueDate = signal<string>('');

  onSubmit() {
    this.tasksService.addNewTask(
      {
        title: this.title(),
        summary: this.summary(),
        dueDate: this.dueDate(),
      },
      this.userId()
    );
    // Reset formularza
    this.resetForm();
    this.cancel.emit(false);
  }

  onCancel() {
    this.cancel.emit(false);
  }

  private resetForm() {
    this.title.set('');
    this.summary.set('');
    this.dueDate.set('');
  }
}
