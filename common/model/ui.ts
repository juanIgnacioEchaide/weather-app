import {ReactNode} from 'react';

export interface WithChildren {
  children: ReactNode | ReactNode[];
}

export interface ScreenTemplate extends WithChildren {
  title: string;
}
