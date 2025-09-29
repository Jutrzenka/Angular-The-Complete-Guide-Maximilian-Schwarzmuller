import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  constructor(private userService: UserService) {}
  users = computed(() => this.userService.getUsers());
  selectedUserId = signal<string | null>(null);

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }

  selectedUser = computed(() => {
    return this.users().find((user) => user.id === this.selectedUserId())!;
  });
}
