import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {EventService} from "../../../../core/service/event.service";
import {EventModel} from "../../../../core/model/event.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-event-page',
  templateUrl: './edit-event-page.component.html',
  styleUrls: ['./edit-event-page.component.scss']
})
export class EditEventPageComponent implements OnInit {

  private routeSubscription: Subscription | null = null;
  private idEvent: number | null = null;
  public event: EventModel | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService, private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.idEvent = params['id'];
      this.eventService.getEvent(params['id']).subscribe(event => {
        this.event = event;
      })
    });
  }


  public submit(event: EventModel) {
    if (this.idEvent) {
      this.eventService.updateAndRefresh(this.idEvent, event);
      this.router.navigate(['events'])
    }
  }
}
