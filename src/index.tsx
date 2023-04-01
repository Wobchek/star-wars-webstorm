import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </BrowserRouter>
// );