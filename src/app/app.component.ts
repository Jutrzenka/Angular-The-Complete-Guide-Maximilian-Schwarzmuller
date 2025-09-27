import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = signal<string>('u1');

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
    console.log('Selected user with id ' + id);
  }

  selectedUser = computed(() => {
    return this.users.find((user) => user.id === this.selectedUserId())!;
  });
}
