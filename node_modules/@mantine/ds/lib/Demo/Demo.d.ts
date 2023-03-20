import React from 'react';
import { MantineDemo } from './types';
import CodeDemo from './CodeDemo/CodeDemo';
import Configurator from './Configurator/Configurator';
export { CodeDemo, Configurator };
type ConfiguratorProps = React.ComponentProps<typeof Configurator>;
type CodeDemoProps = React.ComponentProps<typeof CodeDemo>;
interface DemoProps {
    toggle?: boolean;
    demoProps?: CodeDemoProps;
    configuratorProps?: Omit<ConfiguratorProps, 'props' | 'codeTemplate' | 'component'>;
    data: MantineDemo;
}
export declare function Demo({ data, demoProps, configuratorProps }: DemoProps): JSX.Element;
//# sourceMappingURL=Demo.d.ts.map