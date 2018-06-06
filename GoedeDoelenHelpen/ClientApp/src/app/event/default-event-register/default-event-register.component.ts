import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { NavMenuService } from '../../nav-menu/nav-menu.service';
import { AuthenticationService } from '../../authentication.service';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export class Charity {
  constructor(public name: string, public logo: string) { }
}

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
  charities: Charity[];
  filteredCharities: Observable<any[]>;

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
    private authenticationService: AuthenticationService) {
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
    this.charities = [
      {
        name: 'WNF',
        logo: 'https://www.designboom.com/wp-content/uploads/2015/11/panda-transormation-designboom-818.gif'
      },
      {
        name: 'WEM',
        logo: 'https://s3-eu-west-1.amazonaws.com/votecompany/5910900-www.goudengans.nl.6128438.jpg'
      },
      {
        name: 'KIKA',
        logo: 'https://i1.wp.com/10emeidoorn.nl/wp-content/uploads/2016/03/Kika-logo.jpg'
      },
      {
        name: 'Wakker Dier',
        logo: 'https://d2l8h2eumdtj2d.cloudfront.net/app/uploads/2018/01/Wakker-Dier-Logo-272x205.jpg'
      }
    ];
    this.filteredCharities = this.charityC.valueChanges
      .pipe(
        startWith(''),
        map(charity => charity ? this.filterCharities(charity) : this.charities.slice())
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

  filterCharities(name: string): Charity[] {
    return this.charities.filter(charity =>
      charity.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
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
