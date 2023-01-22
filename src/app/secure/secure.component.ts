import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent {
  newMessage: string;
  messages: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private chatService: ChatService
  ) {
    this.newMessage = '';
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  addMessage() {
    this.chatService.addMessage(this.newMessage);
    this.newMessage = '';
    this.chatService.getChatsFromApi();
  }

  ngOnInit() {
    this.getChats();
    setInterval(() => {
      this.getChats();
    }, 3000);
  }

  getChats() {
    this.chatService.getChatsFromApi().then((result) => {
      console.log(result);
      this.messages = result;
    });
  }
}
