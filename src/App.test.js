import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

test('renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
