import React from 'react';
import './main-page.css';

const customStyle = {
    fill: 'none',
    stroke: '#0061a4',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '5px'
}

const vh80 = {
    height: '80vh',
}

const MainPage = () => {
    return (
        <div>
        <div className="container mt-5 pt-5">
        <section className="section" style={vh80}>
            <div className="row d-flex justify-content-between d-inline-block">
                <div className="col-lg-8 d-lg-block d-md-block d-sm-block d-block my-auto">
                    <h1 className="display-3 fw-bold">Добро пожаловать на сайт Тройки</h1>
                    <p className="fs-3 fw-300 mb-5">Здесь вы можете записаться в стиральную комнату или общественные комнаты.</p>
                    <button className="btn btn-primary fw-bolder text-capitalize btn-lg mt-5">Записаться</button>
                </div>
                <div className="col-lg-4 d-lg-block d-md-none d-sm-none d-none my-auto h-25">
                    <div className="container-fluid d-flex justify-content-end">
                        <svg id="Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288.5 342.52" style={customStyle}>
                            <path className="cls-2" d="M293.91,314.61A13.54,13.54,0,1,0,275.3,310,13.5,13.5,0,0,0,293.91,314.61Z"
                                transform="translate(-153.25 -249.24)" />
                            <path className="cls-2" d="M256.73,320.27A9.58,9.58,0,1,0,243.56,317,9.58,9.58,0,0,0,256.73,320.27Z"
                                transform="translate(-153.25 -249.24)" />
                            <path className="cls-2" d="M345.21,314.43a19.51,19.51,0,1,0-26.82-6.64A19.46,19.46,0,0,0,345.21,314.43Z"
                                transform="translate(-153.25 -249.24)" />
                            <path className="cls-2"
                                d="M255.12,438.1l9.32-12.22c-35.38-14.84-66.06-31.76-71-50.78-2.15-8.34.91-17.12,9.36-26.84,6.93-8,17-15,29.95-21.06l-5.92-13.61c-14.1,6.56-26.34,14.73-35.23,25-11.73,13.49-15.95,27-12.54,40.25C185.39,403.21,216.6,421.72,255.12,438.1Z"
                                transform="translate(-153.25 -249.24)" />
                            <path className="cls-2"
                                d="M364.5,588.43l57.24-336.69-266,337.17h.32a140.12,140.12,0,0,1,208.43-.48Zm-50.76-94.16a36.09,36.09,0,1,1,47.06-20A36.06,36.06,0,0,1,313.74,494.27Z"
                                transform="translate(-153.25 -249.24)" />
                            <path className="cls-2"
                                d="M427.14,504.24c-7.82-9-18.57-16.17-30.94-22l-2.29,13.49c9.91,5,17.76,10.69,23.31,17.07,7.47,8.6,10.19,16.37,8.28,23.75-3.49,13.48-21.62,25.77-44.81,36.89L378,589.26c30.78-13.74,55-29.3,60.21-49.4C441.26,528.14,437.51,516.17,427.14,504.24Z"
                                transform="translate(-153.25 -249.24)" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <section className="section mt-5 pt-5" style={vh80}>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-7 d-lg-block d-md-block d-sm-block d-block my-auto">
                    <h1 className="display-3 fw-thin">Пополнение счета</h1>
                    <p className="fs-3 fw-300 mb-5">Вы можете пополнить свой счет с помощью карты или виртуального кошелька любого банка, просто нажмите на кнопку ниже!</p>
                    <button className="btn btn-primary fw-bolder text-capitalize btn-lg mt-5">Пополнить</button>
                </div>
                <div className="col-lg-5 d-lg-block d-md-none d-sm-none d-none my-auto">
                    <div className="container-fluid d-flex justify-content-end">
                        <img src="../../../public/src/card.svg" alt="" className="img img-fluid" />
                    </div>
                </div>
            </div>
        </section>

        <section className="section mt-5 pt-5" style={vh80}>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-5 d-lg-block d-md-none d-sm-none d-none my-auto">
                    <div className="container-fluid d-flex justify-content-start">
                        <img src="hhh.png" alt="" className="img img-fluid" />
                    </div>
                </div>
                <div className="col-lg-7 d-lg-block d-md-block d-sm-block d-block my-auto">
                    <h1 className="display-3 fw-thin">Не забывайте о времени своей стирки</h1>
                    <p className="fs-3 fw-300 mb-5">Получайте push-уведомления за 10 минут до записи в стиральную комнату!</p>
                    <button className="btn btn-primary fw-bolder text-capitalize btn-lg mt-5" onClick="notifSet()">Подключить</button>
                </div>
            </div>
        </section>
    </div>
    </div>
    );
};

export default MainPage;