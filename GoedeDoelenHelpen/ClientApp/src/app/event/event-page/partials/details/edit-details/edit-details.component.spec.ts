import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailsComponent } from './edit-details.component';

import { MatAutocompleteModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './../../../../../authentication.service';
import { Router } from '@angular/router';
import { RouterStub } from './../../../../../../testing/stubs/router.stub';

describe('EditDetailsComponent', () => {
  let component: EditDetailsComponent;
  let fixture: ComponentFixture<EditDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatAutocompleteModule,
      ],
      declarations: [
        EditDetailsComponent,
      ],
      providers: [
        FormBuilder,
        AuthenticationService,
        {provide: 'BASE_URL', useValue: ''},
        {provide: Router, useClass: RouterStub},
        {provide: MatDialogRef, useValue: { } },
        {provide: MAT_DIALOG_DATA, useValue: { } },
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
