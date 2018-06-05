import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavMenuService {

    theme = new Subject<string>();

    setTheme(value: string) {
        this.theme.next(value);
    }
}
