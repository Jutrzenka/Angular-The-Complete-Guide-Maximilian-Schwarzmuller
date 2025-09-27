import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = signal<string | null>(null);

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }

  selectedUser = computed(() => {
    return this.users.find((user) => user.id === this.selectedUserId())!;
  });
}
