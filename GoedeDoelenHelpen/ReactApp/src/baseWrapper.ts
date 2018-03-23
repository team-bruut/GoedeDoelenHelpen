
export class BaseWrapper {
    async transformOptions(_options: RequestInit): Promise<RequestInit> {
        _options.credentials = 'same-origin';
        return _options;
    }
}