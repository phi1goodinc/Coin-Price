import './App.css';
import React from "react";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {useAppSelector} from "./hooks";
import NotFound from "./components/404/NotFound";



function App() {
    const {status} = useAppSelector(state => state.coins);

    return (
        <div className="App">
            <Header/>
            <div className={'section_main'}>
                {status === null && <Content/>}
                {status === 'resolved' && <Content/>}
                {status === 'loading' && <img alt={'preloader'} src={"https://img.icons8.com/office/80/000000/hourglass-sand-top.png"}/>}
                {status === 'rejected' && <NotFound/>}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
