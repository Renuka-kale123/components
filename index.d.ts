
export function testButton(): any;
interface BorderButtonProps {
    title?: string;
    onPress: () => void;
    disabled?: boolean;
    color?: string;
    error?: string;
    backgroundColor?: string;
    disableBackgroundColor?: string;
    icon?: string;
    btnStyle?: object;
    fontChange?: boolean;
    textColor?: string;
    testId?: string;
    testTextId?: string;
}

export const BorderButton: React.ComponentType<BorderButtonProps>; 