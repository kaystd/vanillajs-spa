import { Validity } from './data/interfaces'

export const checkInputValidity = (validity: Validity): string => {
    switch (validity) {
        case Validity.Init: return ''
        case Validity.Valid: return ''
        default: return 'input-invalid'
    }
}

export const getValidityFeedback = (validity: Validity): string => {
    switch (validity) {
        case Validity.Required : return 'Required'
        case Validity.InvalidMail: return 'Mail address invalid'
        case Validity.InvalidPassword: return 'Password must contain at least 1 uppercase and 1 numeric character' +
            ' and be 6 characters or longer'
        case Validity.Init: return ''
        case Validity.Valid: return ''
        default: return ''
    }
}
