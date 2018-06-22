import { NavMenuService } from './nav-menu.service';
import { Subject } from 'rxjs';

describe('NavMenuService', () => {
    let service: NavMenuService;

    beforeEach(() => {
        service = new NavMenuService();
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('#theme should return type Subject', () => {
        expect(service.theme).toEqual(jasmine.any(Subject));
    });
});