import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs';
import {map, startWith, switchMap, debounce, debounceTime} from 'rxjs/operators';
import { SearchCharity } from './../../../../default-event-register/searchCharity';
import { EventRegisterService } from './../../../../default-event-register/event-register.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  user: {
    firstName: string,
  };

  charityForm: FormGroup;
  charityC: AbstractControl;
  filteredCharities: Observable<SearchCharity[]>;

  eventNameForm: FormGroup;
  eventNameC: AbstractControl;

  eventDateForm: FormGroup;
  eventDateC: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private eventRegisterService: EventRegisterService,
    public dialogRef: MatDialogRef<EditDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public event: {
      title: string,
      date: string,
      charity: string,
    }) { }

  ngOnInit() {
    this.user = {
      firstName: 'Koen',
    };

    // charity
    this.charityForm = this.fb.group({
      charity: ['']
    });
    this.charityC = this.charityForm.get('charity');
    this.filteredCharities = this.charityC.valueChanges
      .pipe(
        debounceTime(200),
        switchMap((value: string) => this.eventRegisterService.searchCharity(value))
      );

    // event name
    this.eventNameForm = this.fb.group({
      eventName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])]
    });
    this.eventNameC = this.eventNameForm.get('eventName');

    // event date
    this.eventDateForm = this.fb.group({
      eventDate: ['', Validators.required]
    });
    this.eventDateC = this.eventDateForm.get('eventDate');
  }

  changeValues() {
    const charity = this.charityC.value;
    const title = this.eventNameC.value;
    const date = this.eventDateC.value;

    if (charity !== this.event.title && charity !== '') {
      this.event.charity = charity;
    }

    if (title !== this.event.title && title !== '') {
      this.event.title = title;
    }

    if (date !== this.event.title && date !== '') {
      this.event.date = date;
    }
    this.dialogRef.close(this.event);
  }

  onNoClick(): void {
    // Attempting to close by clicking elsewhere will result in undefined errors
  }
}
