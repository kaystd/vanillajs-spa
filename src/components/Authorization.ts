import { State } from '../data/interfaces'
import {checkInputValidity, checkSubmit, getValidityFeedback} from '../utils'
import { ClosedEye, OpenedEye } from '../SVGs'
import '../style.sass'

export default (state: State): string => {
    const { authState: { email, password } } = state

    return `<div class="container">
        <div class="header">
            <p>Don't have an account?</p>
            <a class="router-button">Sign Up</a>
        </div>
        <div class="content">
            <div class="form">
                <h1 class="title">Sign In</h1>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input aria-label="email" class="form-control auth ${checkInputValidity(email.validity)}"
                        type="email" placeholder="Your email address" value="${email.value}">
                    <div class="invalid-feedback">${getValidityFeedback(email.validity)}</div>
                </div>
                <div class="form-group input-wrapper">
                    <label class="form-label">Password</label>
                    <input aria-label="password" class="form-control auth ${checkInputValidity(password.validity)}"
                        type="${password.show ? 'text' : 'password'}" placeholder="Your password"
                        value="${password.value}">
                    <div class="invalid-feedback">${getValidityFeedback(password.validity)}</div>
                    <a class="input-icon eye">${password.show ? OpenedEye() : ClosedEye()}</a>
                </div>
                <button type="button" ${checkSubmit(state) ? '' : 'disabled'}
                    class="form-button ${checkSubmit(state) ? '' : 'disabled'}">Sign In</button>
            </div>
        </div>
    </div>`
}
