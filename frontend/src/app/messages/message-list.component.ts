import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-list',
  template: `
      <div class> 
        <app-message [messageVarClasse]="msg"
          (editClicked_MessageMetodoClasse)="msg.content = $event"  
          *ngFor="let msg of this.messageService.messageSService.reverse()" >
        </app-message>    
    </div>
  `

})
export class MessageListComponent implements OnInit {

  constructor (public messageService: MessageService) {  }

  ngOnInit(): void {
    this.messageService.getMessages()
    .subscribe(messages => {
      console.log(messages);
      this.messageService.messageSService = messages;
    });
  }               
}
