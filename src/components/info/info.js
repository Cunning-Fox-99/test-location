import React from "react";
import icon from './icon.svg'
import './info.scss'
import add from './add.svg'
import alertSvg from './alert.svg'

export default function Info({open}) {

    return <div className="info">
        <h4 className="info__title">Location</h4>
        <span className="info__description">Select all options that apply</span>

        <div className="info__wrapper">

            <div className="info__item">
                <div className="info__item-wrapper">
                    <img src={icon} alt=""/>
                    <div className="info__item-text-wrapper">
                        <h5>Office <p>2</p></h5>
                        <span>I have one or more addresses</span>
                    </div>
                    <div className="info__toggle"/>
                </div>
            </div>

            <div className="info__item">
                <div className="info__item-wrapper">
                    <img src={icon} alt=""/>
                    <div className="info__item-text-wrapper">
                        <h5>Video conferencing <p>1</p></h5>
                        <span>We will ask you to connect to your preferred tools</span>
                    </div>
                    <div className="info__toggle"/>
                </div>
            </div>

            <div className="info__item">
                <div className="info__item-wrapper">
                    <img src={icon} alt=""/>
                    <div className="info__item-text-wrapper">
                        <h5>Phone</h5>
                        <span>The client will enter their phone number to be called</span>
                    </div>

                </div>

            </div>

            <div className="info__item open">
                <div className="info__item-wrapper">
                    <img src={icon} alt=""/>
                    <div className="info__item-text-wrapper">
                        <h5>Client’s home</h5>
                        <span>I travel to my clients’ homes or other offices</span>
                    </div>
                    <div className="info__toggle"/>
                </div>

                <div className="info__add-wrapper">
                    <div className="info__add">
                        <img src={add} alt=""/>
                        <div className="info__add-text" onClick={open}>
                            <h5>Add new</h5>
                            <span>Create a new location where you travel for business</span>
                        </div>
                    </div>
                    <span className="info__alert"><img src={alertSvg} alt=""/>Add at least one location you travel to for business</span>
                </div>

            </div>

        </div>

    </div>
}