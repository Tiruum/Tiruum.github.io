import React, { Component } from 'react';
import './sidebar.css';
export default class Sidebar extends Component {
    


    render() {
        const { username, profilePic } = this.props.data;
        console.log(profilePic);
        return (
        <div>
            <div className="wrapper">
            <nav id="sidebar">
                <div className="position-absolute top-0 end-0 p-2" id="dismiss">
                    <i className="bi bi-x text-dark fs-1"></i>
                </div>
        
        
                <div className="dropup border-bottom">
                    <a className="d-flex flex-column ps-3 pt-3 fs-5" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <p><img src={profilePic} alt="Profile Picture" className="img img-fluid rounded-circle" id="userPicture"/> {username} </p>
                    </a>
                    <div className="dropdown-menu" role="menu" aria-labelledby="profileDropdown">
                        <a className="dropdown-item" href="#">Пополнить счет</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Выйти</a>
                    </div>
                </div>
        
                <ul className="list-unstyled components d-flex flex-column border-bottom mt-3">
                    <li>
                        <a href="#dormSubmenu" className="d-flex ps-3 fs-5" data-bs-toggle="collapse" role="button"
                            aria-expanded="true"><p className="m-1 ms-0"><i className="fa-solid fa-house-chimney"></i> Общежития</p></a>
                        <div className="collapse" id="dormSubmenu">
                            <ul className="list-unstyled mb-3">
                                <li className="active"><a href="#" className="d-flex ps-4">Долгопрудный</a></li>
                                <li><a href="#" className="d-flex ps-4">Жуковский</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#roomSubmenu" className="d-flex ps-3 fs-5" data-bs-toggle="collapse"
                            aria-expanded="false"><p className="m-1 ms-0"><i className="fa-solid fa-user"></i> Общие комнаты</p></a>
                        <ul className="collapse list-unstyled mb-3" id="roomSubmenu">
                            <li><a href="#" className="d-flex ps-4">Клуб Романтики</a></li>
                            <li><a href="#" className="d-flex ps-4">КДС</a></li>
                            <li><a href="#" className="d-flex ps-4">Гладильня</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#serviceSubmenu" className="d-flex ps-3 fs-5" data-bs-toggle="collapse"
                            aria-expanded="false"><p className="m-1 ms-0"><i className="bi bi-archive-fill"></i> Услуги</p></a>
                        <ul className="collapse list-unstyled mb-3" id="serviceSubmenu">
                            <li><a href="#" className="d-flex ps-4">Пылесос</a></li>
                            <li><a href="#" className="d-flex ps-4">Инструментарий</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <a href="#" className="position-fixed top-0 start-0 fs-1" id="sidebarCollapse"><i className="bi bi-list"></i></a>
        
            {/* <!-- Page Content Holder --> */}
        
        </div>
        <div className="darker-background"></div>
    </div>
        )
    };
};