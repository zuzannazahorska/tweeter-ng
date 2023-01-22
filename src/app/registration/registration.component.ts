import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  username: string;
  password: string;
  email: string;

  constructor(private chatService: ChatService) {
    this.username = '';
    this.password = '';
    this.email = '';
  }

  register() {
    console.log('name: ' + this.username);
    this.chatService.register(this.username, this.email, this.password);
  }
}
