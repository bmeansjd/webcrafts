import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import spokesman from './spokesman';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import FakeRedux from './FakeRedux';
import DispatchConnect from './ComponentConnect';
import AppConnect from './AppConnect';
import TwoPartCode from './TwoPartCode';

let store = createStore(spokesman);
ReactDOM.render(
    <div>
        <Provider store={store}>
            <div>
                <Header/>
                <TwoPartCode/>
                <AppConnect/>
                <DispatchConnect/>
                <App store={store}/>
                <FakeRedux/>
            </div>
        </Provider>
    </div>, document.getElementById('root')
);

registerServiceWorker();

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
