import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Info from "./components/info/info";
import {useState} from "react";
import ModalWindow from "./components/modal-window/modal-window";

function App() {
    const [active, setActive] = useState(false)
    return (
        <>
            <Header/>
            <main>
                <Info open={() => setActive(true)}/>
            </main>
            <Footer/>
            <ModalWindow active={active} close={() => setActive(false)}/>
        </>
    );
}

export default App;
