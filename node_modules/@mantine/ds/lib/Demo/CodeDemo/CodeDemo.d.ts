import React from 'react';
import { Language } from 'prism-react-renderer';
import { MantineNumberSize } from '@mantine/core';
interface CodeDemoProps {
    code?: string;
    language?: Language;
    demoBackground?: string;
    demoBorder?: boolean;
    children?: React.ReactNode;
    toggle?: boolean;
    inline?: boolean;
    spacing?: boolean;
    radius?: MantineNumberSize;
    zIndex?: React.CSSProperties['zIndex'];
}
export default function CodeDemo({ code, language, children, demoBackground, demoBorder, toggle, inline, spacing, zIndex, radius, }: CodeDemoProps): JSX.Element;
export {};
//# sourceMappingURL=CodeDemo.d.ts.map