import React, {useState} from "react";
import './tabs.scss'
import Form from "../form/form";
import Map from "../map/map";

export default function Tabs() {

    const [active, setActive] = useState(1)

    return <div className="tabs">

        <div className="tabs__nav">
            <div className={active === 1 ? "tabs__nav-item active" : "tabs__nav-item"} onClick={() => setActive(1)}>City</div>
            <div className={active === 2 ? "tabs__nav-item active" : "tabs__nav-item"} onClick={() => setActive(2)}>Postal codes</div>
            <div className={active === 3 ? "tabs__nav-item active" : "tabs__nav-item"} onClick={() => setActive(3)}>Custom area</div>
        </div>

         <div className={active === 1 ? "tabs__content active" :"tabs__content"}>
            <Form inputs={[{text: 'Title'}, {text: 'City'}]}/>
        </div>

         <div className={active === 2 ? "tabs__content active" :"tabs__content"}>
<Form inputs={[{text: 'Title'}, {text: 'Postal code(s)'}]}/>
        </div>

        <div className={active === 3 ? "tabs__content active" :"tabs__content"}>
            <Form inputs={[{text: 'Title'}]}/>
            <div className="tabs__map-wrapper">
                <Map />
            </div>
        </div>

    </div>
}