import { Injectable, Inject, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({ name: 'AuthenticationServiceStub' })
export class AuthenticationServiceStub {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) {
        
    }
}
