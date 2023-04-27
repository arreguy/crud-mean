import { Component } from '@angular/core';
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
              ],
  providers: [MessageService]
})
export class AppComponent {
  title = "frontend";
}  
