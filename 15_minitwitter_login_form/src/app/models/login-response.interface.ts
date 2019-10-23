export interface LoginResponse {
    token: string;
    username: string;
    email: string;
    photoUrl: string;
    created: Date;
    active: boolean;
}