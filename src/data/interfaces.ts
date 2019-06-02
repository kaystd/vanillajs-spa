export interface State {
    regState: RegState,
    authState: AuthState,
    countries: Country[],
}
export interface RegState {
    firstName: FieldState,
    lastName: FieldState,
    email: FieldState,
    country: FieldState,
    phone: FieldState,
    password: FieldState,
}
export interface AuthState {
    email: FieldState,
    password: FieldState,
}
export interface Country {
    value: string,
    phonePrefix: string,
}
export interface FieldState {
    value: string
    validity: Validity
}
export enum Validity {
    Init,
    Valid,
    Required,
    InvalidPhone,
    InvalidMail,
    InvalidPassword,
}
