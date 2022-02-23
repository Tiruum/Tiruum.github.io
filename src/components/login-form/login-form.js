import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
import './login-form.css';

export default class LoginForm extends Component {
    onSubmitted = this.props.onSubmitted;

    render() {
        return (
            <div>
                <form action="/" className="d-flex flex-column">
                    <div className="form-group p-0 mb-3">
                        <label htmlFor="inputEmail" className='label-sm'>Email</label>
                        <input type="email" className="form-control fw-lighter" id="inputEmail" aria-describedby="emailHelp" placeholder="Введите свой email"/>
                        <small id="emailHelp" className="form-text text-muted">Мы ни с кем не делимся вашей почтой</small>
                    </div>
                    <div className="form-group p-0 mb-2">
                        <label htmlFor="inputPassword" className='label-sm'>Пароль</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"/>
                    </div>
                    <div className="d-flex justify-content-center flex-wrap align-content-center p-0 mb-2">
                        <div className="form-check p-0 me-auto order-1">
                            <input type="checkbox" className="form-check-input ms-0" id="check"/>
                            <label className="form-check-label ms-2 fw-bolder text-sm" htmlFor="check">Запомнить меня</label>
                        </div>
                        <div className="form-group p-0 order-2">
                            <a href="/" className="link text-left fw-bolder text-sm">Забыл пароль</a>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <button onClick={this.onSubmitClick} type="button" className="btn btn-primary position-relative text-capitalize p-2 m-0 mb-2 btn-sm container-fluid waves-effect">Войти</button>
                        <GoogleLogin
                            clientId='744713136880-p4eq0bblccrntia52ge51kescquir0li.apps.googleusercontent.com'
                            buttonText='Войти через Google'
                            onSuccess={this.onSubmitted}
                            onFailure={this.onSubmitted}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className={'btn btn-dark position-relative text-capitalize p-2 m-0 mt-1 btn-sm container-fluid'}>Войти через Google</button>
                            )}
                        />
                    </div>
                </form>
                <div className="mt-3 container-fluid">
                    <p className="text-center text-sm">Нет учетной записи? <a href="http://" className="form">Зарегистрируйтесь!</a></p>
                </div>
            </div>
        )
    };
};