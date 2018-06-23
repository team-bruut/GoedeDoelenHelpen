import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterStub } from './../../../../testing/stubs/router.stub';
import { WindowWrapper } from './../../../classes/windowwrapper/windowwrapper';

import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      declarations: [
        ProgressBarComponent
      ],
      providers: [
        WindowWrapper,
        {provide: 'BASE_URL', useValue: ''},
        {provide: Router, useClass: RouterStub},
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Initialization
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // LevelArray
  it('should have levelArray containing name and steps', () => {
    const actual = Object.keys(component.levelArray[0]).sort();
    const expected = [
      'name',
      'steps',
    ].sort();
    expect(actual).toEqual(expected);
  });

  // Level
  it('should have maxLevels equal to array size', () => {
    expect(component.maxLevels).toEqual(component.levelArray.length);
  });

  it('should have level between 1 and maxLevels', () => {
    expect(component.level).toBeGreaterThanOrEqual(1);
    expect(component.level).toBeLessThanOrEqual(component.maxLevels);
  });

  it('should have level of 1', () => {
    expect(component.level).toEqual(1);
  });

  // Value
  it('should have value between 0 and maxValue', () => {
    expect(component.value).toBeGreaterThanOrEqual(0);
    expect(component.value).toBeLessThanOrEqual(component.maxValue);
  });

  it('should have value of 0', () => {
    expect(component.value).toEqual(0);
  });

  // After moving
  it('should have level greater than 1', () => {
    component.move(1);
    expect(component.level).toBeGreaterThan(1);
  });

  it('should have value greater than 0', () => {
    component.move(1);
    expect(component.value).toBeGreaterThan(0);
  });

  it('should have correct value after update', () => {
    component.move(1);
    expect(component.value).toEqual((component.level - 1) * 25);
  });
});
