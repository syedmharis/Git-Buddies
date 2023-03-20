import { BooleanControl } from './BooleanControl';
import { SizeControl } from './SizeControl';
import { StringControl } from './StringControl';
import { ColorControl } from './ColorControl';
import { SelectControl } from './SelectControl';
import { NumberControl } from './NumberControl';
import { SegmentedControl } from './SegmentedControl';
declare const controls: {
    readonly boolean: typeof BooleanControl;
    readonly color: typeof ColorControl;
    readonly select: typeof SelectControl;
    readonly string: typeof StringControl;
    readonly size: typeof SizeControl;
    readonly number: typeof NumberControl;
    readonly segmented: typeof SegmentedControl;
};
export type ControlType = keyof typeof controls;
export interface ControlProps {
    type: ControlType;
    name: string;
    label?: string;
    initialValue?: any;
    defaultValue?: any;
    capitalize?: boolean;
    data?: {
        label: string;
        value: string;
    }[];
    min?: number;
    max?: number;
    step?: number;
}
export default controls;
//# sourceMappingURL=index.d.ts.map