import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';

import { Provider } from 'react-redux';
import store from '../../redux/store';

import { Main } from '../';

const App = () => {
    return (
        <Provider store={store}>
            <div className="ms-Grid" dir="ltr">
                <Main />
            </div>
        </Provider>
    );
}

export default App;