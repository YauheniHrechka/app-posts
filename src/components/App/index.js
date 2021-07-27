import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.scss';

import { Main } from '../';

const App = () => {
    return (
        <div className="ms-Grid" dir="ltr">
            <Main />
        </div>
    );
}

export default App;