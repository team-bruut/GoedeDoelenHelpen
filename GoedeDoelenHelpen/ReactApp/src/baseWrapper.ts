
export class BaseWrapper {
    transformOptions(_options: RequestInit): Promise<RequestInit> {
        _options.credentials = 'same-origin';
        return Promise.resolve(_options);
    }
}