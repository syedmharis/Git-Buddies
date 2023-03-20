import { Tabs } from '@mantine/core';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { PrismTabs, PrismPanel } from './PrismTabs/PrismTabs';
import { PrismProps } from './Prism/Prism';
export type { PrismTheme } from 'prism-react-renderer';
export type { PrismProps, PrismStylesNames } from './Prism/Prism';
export type { PrismStylesParams } from './Prism/Prism.styles';
type PrismComponent = ForwardRefWithStaticComponents<PrismProps, {
    Tabs: typeof PrismTabs;
    TabsList: typeof Tabs.List;
    Tab: typeof Tabs.Tab;
    Panel: typeof PrismPanel;
}>;
declare const PrismExport: PrismComponent;
export { PrismExport as Prism };
//# sourceMappingURL=index.d.ts.map