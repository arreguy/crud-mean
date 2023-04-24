import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css',
              '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'  
              ]
})
export class MessageComponent {

  @Input() messageVarClasse : Message = new Message("","");

  @Input('inputMessage') messageVarClasseAlias : Message = new Message("","");

  @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
  @Output('outputMessage') editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();

  onEdit() {
    this.editClicked_MessageMetodoClasse.emit("Texto veio de message (child) para o app (pai)");
    this.editClicked_MessageMetodoClasseAlias.emit("Texto veio de message (child) para o appp (pai) - Alias");
  }

}
