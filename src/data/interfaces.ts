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
    password: PasswordState,
    [key: string]: FieldState | PasswordState,
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
export interface PasswordState {
    value: string,
    validity: Validity,
    show: boolean,
}
export enum Validity {
    Init = 'INIT',
    Valid = 'VALID',
    Required = 'REQUIRED',
    InvalidMail = 'INVALID_MAIL',
    InvalidPassword = 'INVALID_PASSWORD',
}
