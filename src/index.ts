import App from './App'
import { State, Validity } from './data/interfaces'
import dataState from './data/state'

let state = dataState
export const setState = (handler: (object: State) => State): void => {
    state = handler(state)
}

export const update = (): void => {
    console.log('NEXT_STATE', state)
    document.querySelector('#root').innerHTML = App(state)

    const regInputs = document.querySelectorAll('.reg')
    const authInputs = document.querySelectorAll('.auth')

    regInputs.forEach(input => input.addEventListener('change', event => {
        const { value, attributes } = event.target as HTMLInputElement
        const key = attributes.getNamedItem('aria-label').value

        setState((state: State) => ({
            ...state,
            regState: {
                ...state.regState,
                [key]: {
                    value,
                    validity: Validity.Required,
                },
            },
        }))
        console.log('STATE', state)
        update()
    }))
    authInputs.forEach(input => input.addEventListener('change', event => {
        const { value, attributes } = event.target as HTMLInputElement
        const key = attributes.getNamedItem('aria-label').value

        return setState((state: State) => ({
            ...state,
            authState: {
                ...state.authState,
                [key]: {
                    value,
                    validity: Validity.Required,
                },
            },
        }))
    }))
}

update()

const phoneInput = document.querySelector('.phone-input')
phoneInput.addEventListener('input', event => {
    const x = (event.target as HTMLInputElement).value.replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    (event.target as HTMLInputElement).value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] +
        (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '')
})

module.hot && module.hot.accept()
