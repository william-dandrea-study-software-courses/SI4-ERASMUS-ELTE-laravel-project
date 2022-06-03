import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventModel} from "../model/event.model";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private API_EVENT_URL: string = 'http://127.0.0.1:8000/api/event';

  constructor(private http: HttpClient) {}

  public getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.API_EVENT_URL}`, HTTP_OPTIONS);
  }

  public getEvent(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${this.API_EVENT_URL}/${id}`, HTTP_OPTIONS);
  }

  public deleteEvent(id: number): Observable<null> {
    return this.http.delete<null>(`${this.API_EVENT_URL}/${id}`, HTTP_OPTIONS)
  }

  public addEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(`${this.API_EVENT_URL}`, event, HTTP_OPTIONS)
  }

  public updateEvent(id: number, event: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(`${this.API_EVENT_URL}/${id}`, event, HTTP_OPTIONS)
  }



}
