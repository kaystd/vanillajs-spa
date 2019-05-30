import { OpenedEye, ClosedEye, SelectArrow } from '../SVGs'
import '../Authorization/style.sass'

export default (): string =>
    `<div class="container">
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
                        <input class="form-control" type="text" placeholder="Your first name">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Last name</label>
                        <input class="form-control" type="text" placeholder="Your last name">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input class="form-control" type="email" placeholder="Your email address">
                </div>
                <div class="inline-form-group">
                    <div class="form-group right-offset input-wrapper">
                        <label class="form-label">Country</label>
                        <select class="form-control select">
                            <option selected disabled class="option-disabled">Choose your country</option>
                            ${['USA', 'Canada'].map(el => `<option value="${el}">${el}</option>`)}
                        </select>
                        <div class="input-icon select-arrow">${SelectArrow()}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Phone number</label>
                        <input class="form-control" type="text">
                    </div>
                </div>
                <div class="form-group input-wrapper">
                    <label class="form-label">Password</label>
                    <input class="form-control" type="password" placeholder="Your password">
                    <a class="input-icon">${ClosedEye()}</a>
                </div>
                <a class="form-button">Continue</a>
            </div>
        </div>
    </div>`
