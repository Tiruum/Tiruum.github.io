import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="border-top">
                <div className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
                    <div className="col-md-6 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg className="bi" width="30" height="24"></svg>
                        </a>
                        <span className="text-muted">© 2021 Студсовет ФАКТ (г. Долгопрудный)</span>
                    </div>
                
                    <ul className="nav col-md-6 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a class="text-muted fs-3" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="ms-3"><a class="text-muted fs-3" href="#"><i className="fa-brands fa-vk"></i></a></li>
                    </ul>
                </div>
            </footer>
        )
    };
};