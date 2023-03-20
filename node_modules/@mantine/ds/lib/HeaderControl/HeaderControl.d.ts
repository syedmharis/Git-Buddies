import React from 'react';
import { DefaultProps } from '@mantine/core';
export interface HeaderControlProps extends DefaultProps {
    tooltip: string;
    children: React.ReactNode;
}
export declare const HeaderControl: (<C = "button">(props: import("@mantine/utils").PolymorphicComponentProps<C, HeaderControlProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(HeaderControlProps & {
    component?: any;
} & Omit<Pick<any, string | number | symbol>, "component" | keyof HeaderControlProps> & {
    ref?: any;
}) | (HeaderControlProps & {
    component: React.ElementType<any>;
})>, never> & Record<string, never>;
//# sourceMappingURL=HeaderControl.d.ts.map