import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavMenuService {

    theme = new Subject<string>();

    // Service to change the theme of the navmenubar
    // change: EventEmitter<string> = new EventEmitter();
    // setTheme(theme: string) {
    //     this.theme = theme;
    //     this.change.emit(this.theme);
    // }

    setTheme(value: string) {
        this.theme.next(value);
    }
}
