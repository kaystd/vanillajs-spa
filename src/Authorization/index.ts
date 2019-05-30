import './style.sass'

export default (): string =>
    `<div class="container">
        <div class="header">
            <p>Don't have an account?</p>
            <a class="sign-up-button">Sign Up</a>
        </div>
        <div class="content">
            <div class="form">
                <h1 class="title">Sign In</h1>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input class="form-control" type="email" placeholder="Your email address">
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input class="form-control" type="password" placeholder="Your password">
                </div>
                <a class="form-button">Sign In</a>
            </div>
        </div>
    </div>`
