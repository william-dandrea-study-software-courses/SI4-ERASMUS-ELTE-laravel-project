import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../../core/service/event.service";

@Component({
  selector: 'app-main-event-page',
  templateUrl: './main-event-page.component.html',
  styleUrls: ['./main-event-page.component.scss']
})
export class MainEventPageComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {

  }

}
