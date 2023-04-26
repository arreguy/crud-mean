import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from './message.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent {

  constructor (private messageService: MessageService) { }

  onSubmit(form: NgForm) {
    const messageAux = new Message(form.value.myContentngForm, 'Breno');
    this.messageService.addMessage(messageAux)
      .subscribe(
        dadosSucesso => console.log(dadosSucesso),
        dadosErro => console.log(dadosErro)
      );
    console.log(form);
    form.resetForm();
  }
}
