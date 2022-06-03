import {Component, Input, OnInit} from '@angular/core';
import {EventService} from "../../../../core/service/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() public id: number | null = null;
  @Input() public date: Date | null = null;
  @Input() public title: string | null = null;
  @Input() public location: string | null = null;
  @Input() public note: string | null = null;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {}

  public handleEdit(): void {
    this.router.navigate(['edit-event', this.id])
  }

  public handleDelete(): void {
    if (this.id) {
      this.eventService.deleteAndRefresh(this.id);
    }
  }
}
