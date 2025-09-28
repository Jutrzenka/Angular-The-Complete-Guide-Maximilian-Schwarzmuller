// import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Component, input, output, computed } from '@angular/core';
import { type UserInterface } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  // // Stara metoda inputów w formie dekoratorów
  // @Input({ required: true }) id!: string;
  // @Input({ required: false }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>();

  // get imagePath() {
  //   return '/users/' + this.avatar;
  // }

  // onSelectUser() {
  //   this.select.emit(this.id);
  // }

  //Nowa metoda sygnałów
  user = input.required<UserInterface>();
  select = output<string>();
  selected = input.required<boolean>();

  imagePath = computed(() => {
    return '/users/' + this.user().avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
