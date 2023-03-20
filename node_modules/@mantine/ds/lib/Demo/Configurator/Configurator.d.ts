/// <reference types="react" />
import { MantineNumberSize } from '@mantine/core';
import { ControlProps } from './controls';
interface ConfiguratorProps {
    component: any;
    codeTemplate(props: string, children?: string): string;
    previewBackground?: string;
    multiline?: boolean | number;
    includeCode?: boolean;
    center?: boolean;
    props: ControlProps[];
    filter?: string[];
    radius?: MantineNumberSize;
    background?: string;
}
export default function Configurator({ component: Component, codeTemplate, previewBackground, props: componentProps, multiline, includeCode, center, radius, filter, background, }: ConfiguratorProps): JSX.Element;
export {};
//# sourceMappingURL=Configurator.d.ts.map