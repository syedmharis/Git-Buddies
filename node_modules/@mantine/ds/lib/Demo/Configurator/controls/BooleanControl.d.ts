/// <reference types="react" />
interface BooleanControlProps {
    value: boolean;
    label: string;
    onChange(value: boolean): void;
}
export declare function BooleanControl({ value, label, onChange, ...others }: BooleanControlProps): JSX.Element;
export declare namespace BooleanControl {
    var initialValue: boolean;
}
export {};
//# sourceMappingURL=BooleanControl.d.ts.map