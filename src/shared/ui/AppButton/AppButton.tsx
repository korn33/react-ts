import {classNames, Mods} from "shared/lib/classNames";
import cls from './AppButton.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButtonApp {
    CLEAR = 'clear',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButtonApp,
    square?: boolean,
    size?: ButtonSize
}

export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
    const {className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps} = props

    const mods: Mods = {
        [cls.square]: square
    }

    return (
        <button
            className={classNames(cls.AppButton, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};