import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import store from './store';

export const ReduxProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};
