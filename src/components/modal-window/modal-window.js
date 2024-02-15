import React from 'react';
import './modal-window.scss'
import Tabs from "../tabs/tabs";

export default function ModalWindow({close, active}) {

    return <div className={active ? "modal-window active" : "modal-window"}>

        <div className="modal-window__wrapper">

            <h5 className="modal-window__title">Add a new business location</h5>

            <Tabs />

            <div className="modal-window__buttons">
                <div className="modal-window__button cancel" onClick={close}>Cancel</div>
                <div className="modal-window__button button" onClick={close}>Add location</div>
            </div>
        </div>

    </div>
}