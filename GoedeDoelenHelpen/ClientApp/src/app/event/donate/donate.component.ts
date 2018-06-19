import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavMenuService } from './../../nav-menu/nav-menu.service';
import { SharedModule } from './../../shared/shared.module';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit, OnDestroy, AfterViewInit {

  images: string;

  donateForm: FormGroup;
  nameC: AbstractControl;
  anonymousC: AbstractControl;
  amountC: AbstractControl;
  messageC: AbstractControl;

  event: {
    name: string,
    charity: string,
  };

  payed: boolean;

  constructor(
    private navMenuService: NavMenuService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.navMenuService.setTheme('event');
  }

  ngOnInit() {
    this.images = '../../assets/images/event';

    this.event = {
      name: 'Carwash Capelle',
      charity: 'WEM Nederland',
    };

    this.payed = false;

    this.donateForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(64),
      ])],
      anonymous: [false, Validators.required],
      amount: [0, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(5)])],
      message: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(64)])]
    }, {
      validator: this.validateForm
    } );

    this.nameC = this.donateForm.get('name');
    this.anonymousC = this.donateForm.get('anonymous');
    this.amountC = this.donateForm.get('amount');
    this.messageC = this.donateForm.get('message');
  }

  validateForm(form: FormGroup) {
    if (
      form.get('name').value === '' &&
      form.get('anonymous').value === false
    ) {
      return { 'invalid': true };
    }

    const amount = form.get('amount').value;
    if (amount < 1 || amount > 9999) {
      return { 'invalid': true };
    }

    return null;
  }

  onSubmit() {
    console.log(this.donateForm);
    if (this.donateForm.valid === true) {
      console.log('submit!');
      this.payed = true;
    }
  }

  ngOnDestroy() {
    this.navMenuService.setTheme('default');
  }

  ngAfterViewInit() {
    document.getElementsByClassName('mat-sidenav-content').item(0).scrollTop = 0;
  }
}
