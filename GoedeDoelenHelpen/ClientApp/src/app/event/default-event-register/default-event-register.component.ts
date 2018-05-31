import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-default-event-register',
  templateUrl: './default-event-register.component.html',
  styleUrls: ['./default-event-register.component.scss']
})
export class DefaultEventRegisterComponent implements OnInit {
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  step4: FormGroup;
  step5: FormGroup;
  step6: FormGroup;
  step7: FormGroup;
  firstnameC: AbstractControl;
  lastnameC: AbstractControl;
  emailC: AbstractControl;
  charityC: AbstractControl;
  eventDescriptionC: AbstractControl;
  eventNameC: AbstractControl;
  eventDateC: AbstractControl;
  profileImageC: AbstractControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.step1 = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.firstnameC = this.step1.get('firstname');
    this.lastnameC = this.step1.get('lastname');
    this.emailC = this.step1.get('email');

    this.step2 = this.fb.group({
      charity: ['', Validators.required]
    });
    this.charityC = this.step2.get('charity');

    this.step3 = this.fb.group({
      eventDescription: ['', Validators.compose([Validators.required, Validators.maxLength(280)])]
    });
    this.eventDescriptionC = this.step3.get('eventDescription');

    this.step4 = this.fb.group({
      eventName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])]
    });
    this.eventNameC = this.step4.get('eventName');

    this.step5 = this.fb.group({
      eventDate: ['', Validators.required]
    });
    this.eventDateC = this.step5.get('eventDate');

    this.step6 = this.fb.group({
      profileImage: ['']
    });
    this.profileImageC = this.step6.get('profileImage');
  }

}
