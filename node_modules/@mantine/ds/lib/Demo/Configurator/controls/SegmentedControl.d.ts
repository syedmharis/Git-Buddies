/// <reference types="react" />
interface SizeControlProps {
    value: string;
    label: string;
    onChange(value: string): void;
    data: {
        value: string;
        label: string;
    }[];
}
export declare function SegmentedControl({ value, label, onChange, data, ...others }: SizeControlProps): JSX.Element;
export declare namespace SegmentedControl {
    var initialValue: string;
}
export {};
//# sourceMappingURL=SegmentedControl.d.ts.map