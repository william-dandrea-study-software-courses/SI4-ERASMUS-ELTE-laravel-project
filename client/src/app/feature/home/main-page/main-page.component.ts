import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../core/service/event.service";
import {MinMaxModel} from "../../../core/model/minmax.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public minMaxDates: MinMaxModel| null = null;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getMinimumAndMaximumEventDates().subscribe(value => {
      this.minMaxDates = value;
    })
  }

}
