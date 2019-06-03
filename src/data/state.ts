import { State, Validity } from './interfaces'

const state: State = {
    regState: {
        firstName: {
            value: '',
            validity: Validity.Init,
        },
        lastName: {
            value: '',
            validity: Validity.Init,
        },
        email: {
            value: '',
            validity: Validity.Init,
        },
        country: {
            value: '',
            validity: Validity.Init,
        },
        phone: {
            value: '',
            validity: Validity.Init,
        },
        password: {
            value: '',
            validity: Validity.Init,
            show: false,
        },
    },
    authState: {
        email: {
            value: '',
            validity: Validity.Init,
        },
        password: {
            value: '',
            validity: Validity.Init,
        },
    },
    countries: [
        {
            value: 'United States',
            phonePrefix: '+1',
        },
        {
            value: 'Canada',
            phonePrefix: '+1',
        },
        {
            value: 'Australia',
            phonePrefix: '+61',
        },
        {
            value: 'United Kingdom',
            phonePrefix: '+44',
        },
        {
            value: 'France',
            phonePrefix: '+33',
        },
        {
            value: 'Germany',
            phonePrefix: '+49',
        },
        {
            value: 'Switzerland',
            phonePrefix: '+41',
        },
        {
            value: 'Sweden',
            phonePrefix: '+46',
        },
        {
            value: 'Norway',
            phonePrefix: '+47',
        },
        {
            value: 'Finland',
            phonePrefix: '+358',
        },
        {
            value: 'Austria',
            phonePrefix: '+43',
        },
        {
            value: 'Denmark',
            phonePrefix: '+41',
        },
        {
            value: 'Belgium',
            phonePrefix: '+32',
        },
        {
            value: 'Netherlands',
            phonePrefix: '+31',
        },
        {
            value: 'Russia',
            phonePrefix: '+7',
        },
    ],
}

export default state
