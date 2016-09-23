import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<Root />, document.getElementById('app'));
