import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/utils/redux/store';
import Navigator from './src/navigation';

export default function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}


