import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messageSService: Message[] = [];

  constructor(private http: HttpClient, private authService: AuthService) { }

  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>('http://localhost:3000/messages', message)
      .pipe(
        tap((newMessage: Message) => {
          this.messageSService.push(newMessage);
        }),
        catchError((error: any) => throwError(error))
      );
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:3000/messages');
  }

  deleteMessage(message: Message): Observable<Message> {
    return this.http.delete<Message>(`http://localhost:3000/messages/${message._id}`)
    .pipe(
      tap(() => {
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
      }),
      catchError((error: any) => throwError(error))
    );
  }

  updateMessage(message: Message): Observable<Message> {
    return this.http.put<Message>(`http://localhost:3000/messages/${message._id}`, message)
    .pipe(
      tap((newMessage: Message) => {
        const index = this.messageSService.findIndex(m => m._id === message._id);
        this.messageSService[index] = message;
      }),
      catchError((error: any) => throwError(error))
    );
  }  
}