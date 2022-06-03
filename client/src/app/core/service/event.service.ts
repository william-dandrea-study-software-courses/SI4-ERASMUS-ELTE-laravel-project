import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {EventModel} from "../model/event.model";
import {MinMaxModel} from "../model/minmax.model";

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

  public allEvents: EventModel[] | null = null;
  public allEvents$: BehaviorSubject<EventModel[] | null> = new BehaviorSubject<EventModel[] | null>(null)

  private API_EVENT_URL: string = 'http://127.0.0.1:8000/api/event';
  private API_MIN_MAX_URL: string = 'http://127.0.0.1:8000/api/limits-date-event';

  constructor(private http: HttpClient) {
    this.setAllEvents();
  }

  public setAllEvents(): void {
    this.getEvents().subscribe(value => {
      this.allEvents = value;
      this.allEvents$.next(this.allEvents);
    })
  }

  public deleteAndRefresh(id: number) {
    this.deleteEvent(id).subscribe(value => this.setAllEvents());
  }

  public addAndRefresh(event: EventModel) {
    this.addEvent(event).subscribe(value => this.setAllEvents());
  }

  public updateAndRefresh(id: number, event: EventModel): Subscription {
    return this.updateEvent(id, event).subscribe(value => this.setAllEvents());
  }

  public getEvent(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${this.API_EVENT_URL}/${id}`, HTTP_OPTIONS);
  }

  public getMinimumAndMaximumEventDates(): Observable<MinMaxModel> {
    return this.http.get<MinMaxModel>(this.API_MIN_MAX_URL, HTTP_OPTIONS);
}

  private getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.API_EVENT_URL}`, HTTP_OPTIONS);
  }

  private deleteEvent(id: number): Observable<null> {
    return this.http.delete<null>(`${this.API_EVENT_URL}/${id}`, HTTP_OPTIONS)
  }

  private addEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(`${this.API_EVENT_URL}`, event, HTTP_OPTIONS)
  }

  private updateEvent(id: number, event: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(`${this.API_EVENT_URL}/${id}`, event, HTTP_OPTIONS)
  }



}
