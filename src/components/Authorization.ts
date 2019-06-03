import '../style.sass'
import { State } from '../data/interfaces'
import { checkInputValidity, getValidityFeedback } from '../utils'

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
                    <input class="form-control ${checkInputValidity(email.validity)}" type="email"
                        placeholder="Your email address" value="${email.value}">
                    <div class="invalid-feedback">${getValidityFeedback(email.validity)}</div>
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input class="form-control ${checkInputValidity(password.validity)}" type="password"
                        placeholder="Your password" value="${password.value}">
                    <div class="invalid-feedback">${getValidityFeedback(password.validity)}</div>
                </div>
                <a class="form-button">Sign In</a>
            </div>
        </div>
    </div>`
}
