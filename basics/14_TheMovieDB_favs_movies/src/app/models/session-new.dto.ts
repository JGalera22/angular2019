export class SessionNewDto {
    request_token: string;

    constructor(t: string) {
        this.request_token = t;
    }
}