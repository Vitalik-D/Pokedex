import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reducers } from './components/store/reducers'
import { Provider } from 'react-redux';
import { createStore, combineReducers,} from 'redux';


const rootReducer = combineReducers( reducers );
const store = createStore(
    rootReducer,
);

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

