import React from "react";
import './form.scss'

export default function Form({inputs}) {

    return <form className="form">
        {inputs.map((input, i) => {
            return <label className="form__item" key={i}> <span>{input.text}</span>
                <input type="text" className="form__input"/>
            </label>
        })}
    </form>
}