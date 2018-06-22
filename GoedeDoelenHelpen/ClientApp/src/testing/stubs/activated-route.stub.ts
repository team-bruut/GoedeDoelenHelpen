import { Pipe } from '@angular/core';

@Pipe({ name: 'ActivatedRouteStub' })
export class ActivatedRouteStub {
    snapshot: object = { data: { } };
    queryParams: object = { pipe: function() { return { subscribe: function() { } } } };
}
