import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../../core/service/event.service";
import {EventModel} from "../../../../core/model/event.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-event-page',
  templateUrl: './main-event-page.component.html',
  styleUrls: ['./main-event-page.component.scss']
})
export class MainEventPageComponent implements OnInit {

  public allEvents: EventModel[] | null = null;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.eventService.allEvents$.subscribe(events => {
      this.allEvents = events;
    })
  }

  public handleCreationEvent(): void {
    this.router.navigate(['/add-event'])
  }

}
