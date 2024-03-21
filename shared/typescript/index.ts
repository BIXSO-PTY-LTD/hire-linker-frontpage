import type { ReactNode } from 'react';

export * from './language';
export * from './loading';
export * from './expert';

export type T_Any =
    | {
          [key: string]: Object | string | number | boolean | null | undefined;
      }
    | Object
    | string
    | number
    | boolean
    | null
    | undefined;

export interface I_Children {
    children: ReactNode;
}
