/// <reference types="react" />
import { DefaultProps } from '@mantine/core';
interface HeaderControlsProps extends DefaultProps {
    onSearch(): void;
    githubLink: string;
    direction: 'rtl' | 'ltr';
    toggleDirection(): void;
}
export declare function HeaderControls({ onSearch, githubLink, direction, toggleDirection, ...others }: HeaderControlsProps): JSX.Element;
export {};
//# sourceMappingURL=HeaderControls.d.ts.map