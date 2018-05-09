import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NavMenuService {

    private theme = 'default';

    // Service to change the theme of the navmenubar
    change: EventEmitter<string> = new EventEmitter();
    setTheme(theme: string) {
        this.theme = theme;
        this.change.emit(this.theme);
    }
}
