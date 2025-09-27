// import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Component, input, output, computed } from '@angular/core';

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
  // @Output() select = new EventEmitter();

  // get imagePath() {
  //   return '/users/' + this.avatar;
  // }

  // onSelectUser() {
  //   this.select.emit(this.id);
  // }

  //Nowa metoda sygnałów
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  imagePath = computed(() => {
    return '/users/' + this.avatar();
  });

  onSelectUser() {
    this.select.emit(this.id());
  }
}
