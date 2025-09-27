import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  users = DUMMY_USERS;
  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
  }
}
