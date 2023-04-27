import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messageSService: Message[] = [];

  constructor(private http: HttpClient) { }

  addMessage(message: Message): Observable<Message> {
    this.messageSService.push(message);
    console.log(this.messageSService);

    return this.http.post<Message>('http://localhost:3000/messages', message);
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:3000/messages');
  }

  deleteMessage(message: Message): Observable<Message> {
    this.messageSService.splice(this.messageSService.indexOf(message), 1);
    return this.http.delete<Message>(`http://localhost:3000/messages/${message._id}`)
  }

  updateMessage(message: Message): Observable<Message> {
    const index = this.messageSService.findIndex(m => m._id === message._id);
    this.messageSService[index] = message;
    return this.http.put<Message>(`http://localhost:3000/messages/${message._id}`, message)
  }  
}