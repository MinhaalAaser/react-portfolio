import React, { Component } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/about-me" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </div>
                   
                </div>

                <div className="right-side">
                    MINHAAL AASER
                </div>

            </div>
        )
    }
}