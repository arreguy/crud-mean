import { Component } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent {

  constructor (private messageService: MessageService) { }

  onSave(textoConsole: string) {
    const messageAux = new Message(textoConsole, 'Breno');
    this.messageService.addMessage(messageAux);
    console.log(textoConsole);
  }
}
