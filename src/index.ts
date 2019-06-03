import App from './components/App'
import { Route, State, Validity } from './data/interfaces'
import {normalizePhone, validate} from './utils'
import dataState from './data/state'

let state = dataState
export const setState = (handler: (object: State) => State): void => {
    state = handler(state)
}

export const update = (): void => {
    document.querySelector('#root').innerHTML = App(state)

    const inputs = document.querySelectorAll('.form-control')
    const phoneInput = document.querySelector('.phone-input')
    const passwordEye = document.querySelector('.eye')
    const routerButton = document.querySelector('.router-button')
    const submitButton = document.querySelector('.form-button')

    inputs && inputs.forEach(input => input.addEventListener('change', event => {
        const { value, attributes } = event.target as HTMLInputElement
        const stateKey = state.route === Route.Authorization ? 'authState' : 'regState'
        const fieldKey = attributes.getNamedItem('aria-label').value

        setState((state: State) => ({
            ...state,
            [stateKey]: {
                ...state[stateKey],
                [fieldKey]: {
                    ...state[stateKey][fieldKey],
                    value,
                    validity: stateKey === 'authState'
                        ? value.length === 0 ? Validity.Required
                        : Validity.Valid : validate(fieldKey, value),
                },
            },
        }))
        update()
    }))

    phoneInput && phoneInput.addEventListener('input', event => {
        const x = (event.target as HTMLInputElement).value.replace(/\D/g, '')
            .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        (event.target as HTMLInputElement).value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] +
            (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '')
    })

    passwordEye && passwordEye.addEventListener('click', () => {
        const stateKey = state.route === Route.Authorization ? 'authState' : 'regState'
        setState((state: State) => ({
            ...state,
            [stateKey]: {
                ...state[stateKey],
                password: {
                    ...state[stateKey].password,
                    show: !state[stateKey].password.show,
                },
            },
        }))
        update()
    })

    routerButton && routerButton.addEventListener('click', () => {
        setState((state: State) => ({
            ...state,
            route: state.route === Route.Authorization ? Route.Registration : Route.Authorization,
        }))
        update()
    })

    submitButton && submitButton.addEventListener('click', () => {
        const { route, authState: { email: authEmail, password: authPassword }, regState:
            { firstName, lastName, email, country, password } } = state
        switch (route) {
            case Route.Authorization: {
                const submitState = {
                    email: authEmail.value,
                    password: authPassword.value,
                }
                return fetch('http://backend.io/auth', { method: 'POST', body: JSON.stringify(submitState) })
                    .then(response => response.json())
                    .then(json => console.log('RESPONSE', json),
                        err => console.log('ERROR', err))
            }
            case Route.Registration: {
                const submitSate = {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    email: email.value,
                    country: country.value,
                    phone: normalizePhone(state),
                    password: password.value,
                }
                return fetch('http://backend.io/reg', { method: 'POST', body: JSON.stringify(submitSate) })
                    .then(response => response.json())
                    .then(json => console.log('RESPONSE', json),
                        err => console.log('ERROR', err))
            }
        }
    })
}

update()

module.hot && module.hot.accept()
