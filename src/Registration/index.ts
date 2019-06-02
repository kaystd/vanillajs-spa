import {ClosedEye, SelectArrow} from '../SVGs'
import '../Authorization/style.sass'
import { Country, State, Validity } from '../data/interfaces'

export default (state: State): string => {
    const { regState: { firstName, lastName, country, phone, email, password }, countries } = state

    const getPhonePrefix = (): string => {
        const selectedCountry: Country = countries.find(({ value }) => value === country.value)
        return selectedCountry ? selectedCountry.phonePrefix : '+7'
    }

    return `<div class="container">
        <div class="header">
            <p>Already have an account?</p>
            <a class="sign-up-button">Sign In</a>
        </div>
        <div class="content">
            <div class="form">
                <h1 class="title">Sign Up</h1>
                <div class="inline-form-group">
                    <div class="form-group right-offset">
                        <label class="form-label">First name</label>
                        <input aria-label="firstName" class="form-control reg" type="text" placeholder="Your first name"
                            value="${firstName.value}">
                        <div class="invalid-feedback ${firstName.validity === Validity.Required ? 'hidden' : ''}">
                            Required
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Last name</label>
                        <input aria-label="lastName" class="form-control reg" type="text" placeholder="Your last name"
                            value="${lastName.value}">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input aria-label="email" class="form-control reg" type="email" placeholder="Your email address"
                        value="${email.value}">
                </div>
                <div class="inline-form-group">
                    <div class="form-group right-offset input-wrapper">
                        <label class="form-label">Country</label>
                        <select aria-label="country" class="form-control reg select ${country.validity
                            === Validity.Init ? 'select-non-selected' : ''}">
                            <option selected disabled hidden>Choose your country</option>
                            ${countries.map(({ value }) => `<option class="option" ${value === country.value
                                ? 'selected' : ''} value="${value}">${value}</option>`)}
                        </select>
                        <div class="input-icon select-arrow">${SelectArrow()}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Phone number</label>
                        <div class="phone form-control">
                            <div class="phone-prefix">${getPhonePrefix()}</div>
                            <input aria-label="phone" class="form-control reg phone-input" type="text"
                                placeholder="(___)-___-__-__" value="${phone.value}">
                        </div>
                    </div>
                </div>
                <div class="form-group input-wrapper">
                    <label class="form-label">Password</label>
                    <input aria-label="password" class="form-control reg" type="password" placeholder="Your password"
                        value="${password.value}">
                    <a class="input-icon">${ClosedEye()}</a>
                </div>
                <a class="form-button">Continue</a>
            </div>
        </div>
    </div>`
}
