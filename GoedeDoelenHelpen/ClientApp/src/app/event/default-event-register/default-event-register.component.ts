import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { NavMenuService } from '../../nav-menu/nav-menu.service';
import { AuthenticationService } from '../../authentication.service';

import {Observable} from 'rxjs';
import {map, startWith, switchMap, debounce, debounceTime} from 'rxjs/operators';
import { SearchCharity } from './searchCharity';
import { EventRegisterService } from './event-register.service';

@Component({
  selector: 'app-default-event-register',
  templateUrl: './default-event-register.component.html',
  styleUrls: ['./default-event-register.component.scss']
})
export class DefaultEventRegisterComponent implements OnInit, OnDestroy {

  personalDetailsForm: FormGroup;
  firstnameC: AbstractControl;
  lastnameC: AbstractControl;
  emailC: AbstractControl;

  charityForm: FormGroup;
  charityC: AbstractControl;
  filteredCharities: Observable<SearchCharity[]>;

  eventDescriptionForm: FormGroup;
  eventDescriptionC: AbstractControl;

  eventNameForm: FormGroup;
  eventNameC: AbstractControl;

  eventDateForm: FormGroup;
  eventDateC: AbstractControl;

  profileImageForm: FormGroup;
  profileImageC: AbstractControl;

  passwordForm: FormGroup;
  passwordC: AbstractControl;
  passwordRepeatC: AbstractControl;

  eventRegisterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navMenuService: NavMenuService,
    private authenticationService: AuthenticationService,
    private eventRegisterService: EventRegisterService
  ) {
      this.navMenuService.setTheme('registration');
  }

  ngOnInit() {

    // personal details
    this.personalDetailsForm = this.fb.group({
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(64)])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
    this.firstnameC = this.personalDetailsForm.get('firstname');
    this.lastnameC = this.personalDetailsForm.get('lastname');
    this.emailC = this.personalDetailsForm.get('email');

    // charity
    this.charityForm = this.fb.group({
      charity: ['', Validators.required]
    });
    this.charityC = this.charityForm.get('charity');
    this.filteredCharities = this.charityC.valueChanges
      .pipe(
        debounceTime(200),
        switchMap((value: string) => this.eventRegisterService.searchCharity(value))
      );

    // event description
    this.eventDescriptionForm = this.fb.group({
      eventDescription: ['', Validators.compose([Validators.required, Validators.maxLength(280)])]
    });
    this.eventDescriptionC = this.eventDescriptionForm.get('eventDescription');

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

    // profile image
    this.profileImageForm = this.fb.group({
      profileImage: ['']
    });
    this.profileImageC = this.profileImageForm.get('profileImage');

    // password
    this.passwordForm = this.fb.group({
        password: [
          '', [
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(64),
          ])]
        ],
        passwordRepeat: ['', Validators.required]
      }, this.passwordValidator );
    this.passwordC = this.passwordForm.get('password');
    this.passwordRepeatC = this.passwordForm.get('passwordRepeat');

    this.eventRegisterForm = this.fb.group({
      personalDetails: this.personalDetailsForm,
      charity: this.charityForm,
      eventName: this.eventNameForm,
      eventDescription: this.eventDescriptionForm,
      eventDate: this.eventDateForm,
      password: this.passwordForm,
    });
  }

  toLocalDate(dateString: Date) {
    const options = { month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', options);
  }

  passwordValidator(passwordForm: FormGroup) {
    const passwordC = passwordForm.get('password');
    const passwordRepeatC = passwordForm.get('passwordRepeat');
    return this.validPassword(passwordC) && this.equalPasswords(passwordC, passwordRepeatC)
      ? null : {'invalid': true };
  }

  validPassword(password: AbstractControl): boolean {
    return new RegExp('(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[A-Z])').test(password.value);
  }

  equalPasswords(password: AbstractControl, repeat: AbstractControl): boolean {
    return password.value === repeat.value ? true : false;
  }

  onSubmit() {
    if (this.eventRegisterForm.valid) {
      this.authenticationService.signUp({
        username: this.emailC.value,
        password: this.passwordC.value,
        firstname: this.firstnameC.value,
        lastname: this.lastnameC.value,
        email: this.emailC.value,
        profileimage: this.profileImageC.value
      }).subscribe();
    }
  }

  ngOnDestroy() {
    this.navMenuService.setTheme('default');
  }
}
