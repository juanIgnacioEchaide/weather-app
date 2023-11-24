import {WithChildren} from '../../common';
import React, {ReactNode} from 'react';
import {View} from 'react-native';

export const ScreenContainer = ({children}: WithChildren): ReactNode => {
  return <View>{children}</View>;
};
