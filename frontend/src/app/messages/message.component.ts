import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css',
              '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'  
              ]
})
export class MessageComponent {

  @Input() messageVarClasse : Message = new Message("", "${this.authService.usuarioAtual.firstName} ${this.authService.usuarioAtual.lastName}");

  @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();

  onEdit() {
    const novoConteudo = prompt("Insira o novo conteúdo da mensagem: ");
    if (novoConteudo) {
      const updatedMessage = {...this.messageVarClasse, content: novoConteudo};
      this.messageService.updateMessage(updatedMessage)
      .subscribe();
    }
  }

  constructor(private messageService: MessageService, private authService: AuthService) {  }

  onDelete() {
    this.messageService.deleteMessage(this.messageVarClasse)
      .subscribe(deletedMessage => {
        console.log("Mensagem deletada: ", deletedMessage);
      });
  }
}