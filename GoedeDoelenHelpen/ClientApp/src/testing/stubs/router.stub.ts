import { Pipe } from '@angular/core';

@Pipe({ name: 'ActivatedRouteStub' })
export class RouterStub {
    navigateByUrl(url: string) {
      return url;
    }
}
