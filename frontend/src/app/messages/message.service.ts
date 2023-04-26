import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from 'http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSService: Message[] = [];

  constructor(private http: HttpClient) { }

  addMessage(message: Message) {
    this.messageSService.push(message);
    console.log(this.messageSService);

    const bodyReq = JSON.stringify(message);
    let headers: HttpHeaders = req.headers;
    return this.http.post('http:localhost:3000/message', bodyReq, { headers })
      .map((responseRecebida: Response) => responseRecebida.json()
      .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
  }

  getMessages() {
    return this.messageSService;
  }

  deleteMessage(message: Message) {
    this.messageSService.splice(this.messageSService.indexOf(message), 1);
  }
  
}
