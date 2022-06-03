import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventModel} from "../../../../core/model/event.model";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  @Input() public event: EventModel | null = null;
  @Output() public save = new EventEmitter<EventModel>();

  public eventForm: FormGroup = this.formBuilder.group({
    date: ["", [Validators.required]],
    title: ["", [Validators.required]],
    location: ["", [Validators.required]],
    note: ["", [Validators.required]],
  });


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.event) {
      this.eventForm.controls['date'].setValue(this.formatDate(this.event?.date));
      this.eventForm.controls['title'].setValue(this.event?.title);
      this.eventForm.controls['location'].setValue(this.event?.location);
      this.eventForm.controls['note'].setValue(this.event?.note);
    }
  }

  public submit(): void {
    if (this.eventForm.valid) {
      this.save.emit(this.eventForm.value);
    }
  }


  private formatDate(d: any): any {
    const date = new Date(d);
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

}
