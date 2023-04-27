import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  template: `
  <div class="row">
    <!-- <strong class="col-md-8 col-md-offset-2">== Após Reestruturação ==</strong> -->
    <legend class="col-md-8 col-md-offset-2">Formulário</legend>
    <app-message-input></app-message-input>
    <app-message-list></app-message-list>
  </div>
  `
})
export class MessagesComponent {

}
