import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  cancel = output<boolean>();
  addTask = output<{ title: string; summary: string; dueDate: string }>();

  title = signal<string>('');
  summary = signal<string>('');
  dueDate = signal<string>('');

  onSubmit() {
    // Emitowanie danych
    this.addTask.emit({
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    });

    // Reset formularza
    this.resetForm();
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
