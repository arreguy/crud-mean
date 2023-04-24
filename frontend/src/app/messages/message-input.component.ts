import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent {

  constructor (private messageService: MessageService) { }

  onSubmit(form: NgForm) {
    const messageAux = new Message(form.value.myContentngForm, 'Breno');
    this.messageService.addMessage(messageAux);
    console.log(form);
    form.resetForm();
  }
}
