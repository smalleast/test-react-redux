import App from './app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
