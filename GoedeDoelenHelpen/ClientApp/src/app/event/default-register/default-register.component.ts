import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-default-register',
  templateUrl: './default-register.component.html',
  styleUrls: ['./default-register.component.css']
})
export class DefaultRegisterComponent implements OnInit {
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  step4: FormGroup;
  step5: FormGroup;
  step6: FormGroup;
  step7: FormGroup;
  nameC: AbstractControl;
  surNameC: AbstractControl;
  foundationNameC: AbstractControl;
  eventDescriptionC: AbstractControl;
  eventNameC: AbstractControl;
  eventDateC: AbstractControl;
  profileImageC: AbstractControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.step1 = this.fb.group({
      name: ['', Validators.required]
    });
    this.nameC = this.step1.get('name');
    this.step2 = this.fb.group({
      surName: ['', Validators.required]
    });
    this.surNameC = this.step2.get('surName');
    this.step3 = this.fb.group({
      foundationName: ['', Validators.required]
    });
    this.foundationNameC = this.step3.get('foundationName');
    this.step4 = this.fb.group({
      eventDescription: ['', Validators.compose([Validators.required, Validators.maxLength(280)])]
    });
    this.eventDescriptionC = this.step4.get('eventDescription');
    this.step5 = this.fb.group({
      eventName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])]
    });
    this.eventNameC = this.step5.get('eventName');
    this.step6 = this.fb.group({
      eventDate: ['', Validators.required]
    });
    this.eventDateC = this.step6.get('eventDate');
    this.step7 = this.fb.group({
      profileImage: ['']
    });
    this.profileImageC = this.step7.get('profileImage');
  }

}
