import { Route, State, Validity } from './data/interfaces'

export const checkInputValidity = (validity: Validity): string => {
    switch (validity) {
        case Validity.Init: return ''
        case Validity.Valid: return ''
        default: return 'invalid-input'
    }
}

export const getValidityFeedback = (validity: Validity): string => {
    switch (validity) {
        case Validity.Required : return 'Required'
        case Validity.InvalidMail: return 'Mail address invalid'
        case Validity.InvalidPassword: return 'Password must contain at least 1 uppercase and 1 numeric character' +
            ' and be 6 characters or longer'
        case Validity.InvalidPhone: return 'Phone invalid'
        case Validity.Init: return ''
        case Validity.Valid: return ''
        default: return ''
    }
}

const mailValidate = (mail: string): boolean => {
    const mailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return mailRegex.test(mail)
}

const passwordValidate = (pass: string): boolean => {
    const passRegex = /(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/
    return passRegex.test(pass)
}

const phoneValidate = (phone: string): boolean => phone.length === 15

export const validate = (key: string, value: string): Validity => {
    if (value.length === 0) return Validity.Required
    switch (key) {
        case 'email': return mailValidate(value) ? Validity.Valid : Validity.InvalidMail
        case 'password': return passwordValidate(value) ? Validity.Valid : Validity.InvalidPassword
        case 'phone': return phoneValidate(value) ? Validity.Valid : Validity.InvalidPhone
        default: return Validity.Valid
    }
}

export const normalizePhone = (state: State): string => {
    const { countries, regState: { country, phone } } = state
    const phonePrefix = countries.find(v => v.value === country.value).phonePrefix
    const phoneNumber = phone.value.replace(/[()\- ]/g, '')
    return phonePrefix + phoneNumber
}

export const checkSubmit = (state: State): boolean => {
    switch (state.route) {
        case Route.Registration:
            return Object.values(state.regState).every(_ => _.validity === Validity.Valid)
        case Route.Authorization:
            return Object.values(state.authState).every(_ => _.validity === Validity.Valid)
        default:
            return false
    }
}
