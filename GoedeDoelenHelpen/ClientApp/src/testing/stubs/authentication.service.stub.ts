import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class AuthenticationServiceStub {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) {
        
    }
}
