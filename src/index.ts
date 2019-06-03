import App from './components/App'
import {PasswordState, State, Validity} from './data/interfaces'
import dataState from './data/state'

let state = dataState
export const setState = (handler: (object: State) => State): void => {
    state = handler(state)
}

const mailValidate = (mail: string): boolean => {
    const mailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return mailRegex.test(mail)
}

const passwordValidate = (pass: string): boolean => {
    const passRegex = /(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/
    return passRegex.test(pass)
}

const validate = (key: string, value: string): Validity => {
    if (value.length === 0) return Validity.Required
    switch (key) {
        case 'email': return mailValidate(value) ? Validity.Valid : Validity.InvalidMail
        case 'password': return passwordValidate(value) ? Validity.Valid : Validity.InvalidPassword
        default: return Validity.Valid
    }
}

export const update = (): void => {
    console.log('NEXT_STATE', state)
    document.querySelector('#root').innerHTML = App(state)

    const regInputs = document.querySelectorAll('.reg')
    const authInputs = document.querySelectorAll('.auth')
    const phoneInput = document.querySelector('.phone-input')
    const passwordEye = document.querySelector('.eye')
    const routerButton = document.querySelectorAll('.router-button')
    const submitButton = document.querySelectorAll('.submit-button')

    regInputs.forEach(input => input.addEventListener('change', event => {
        const { value, attributes } = event.target as HTMLInputElement
        const key = attributes.getNamedItem('aria-label').value

        setState((state: State) => ({
            ...state,
            regState: {
                ...state.regState,
                [key]: {
                    ...state.regState[key],
                    value,
                    validity: validate(key, value),
                },
            },
        }))
        console.log('STATE', state)
        update()
    }))
    authInputs.forEach(input => input.addEventListener('change', event => {
        const { value, attributes } = event.target as HTMLInputElement
        const key = attributes.getNamedItem('aria-label').value

        setState((state: State) => ({
            ...state,
            authState: {
                ...state.authState,
                [key]: {
                    value,
                    validity: value.length === 0 ? Validity.Required : Validity.Valid,
                },
            },
        }))
        update()
    }))
    phoneInput.addEventListener('input', event => {
        const x = (event.target as HTMLInputElement).value.replace(/\D/g, '')
            .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        (event.target as HTMLInputElement).value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] +
            (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '')
    })
    passwordEye.addEventListener('click', _ => {
        setState((state: State) => ({
            ...state,
            regState: {
                ...state.regState,
                password: {
                    ...state.regState.password,
                    show: !state.regState.password.show,
                },
            },
        }))
        update()
    })
}

update()

module.hot && module.hot.accept()
