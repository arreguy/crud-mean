import { Injectable } from '@angular/core';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSService: Message[] = [];

  addMessage(message: Message) {
    this.messageSService.push(message);
    console.log(this.messageSService);
  }

  getMessages() {
    return this.messageSService;
  }

  deleteMessage(message: Message) {
    this.messageSService.splice(this.messageSService.indexOf(message), 1);
  }
  
}
