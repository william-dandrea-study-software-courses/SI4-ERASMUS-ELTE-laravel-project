import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {EventModel} from "../../../../core/model/event.model";
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../../../core/service/event.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-event-page',
  templateUrl: './add-event-page.component.html',
  styleUrls: ['./add-event-page.component.scss']
})
export class AddEventPageComponent implements OnInit {

  public event: EventModel | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventService, private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.event = {
      id: null,
      date: new Date(),
      title: '',
      location: '',
      note: '',
    }
  }


  public submit(event: EventModel) {

    this.eventService.addAndRefresh(event);
    this.router.navigate(['events'])

  }

}
