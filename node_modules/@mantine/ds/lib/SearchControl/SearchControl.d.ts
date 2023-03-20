import React from 'react';
import { DefaultProps } from '@mantine/core';
interface SearchControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
    onClick(): void;
}
export declare function SearchControl({ className, ...others }: SearchControlProps): JSX.Element;
export {};
//# sourceMappingURL=SearchControl.d.ts.map