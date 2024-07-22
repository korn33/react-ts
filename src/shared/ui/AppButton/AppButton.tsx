import {classNames, Mods} from "shared/lib/classNames";
import cls from './AppButton.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButtonApp {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    BACKGROUND_INVERTED = 'backgroundInverted',
    OUTLINE = "outline"
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
        disabled,
        ...otherProps} = props

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    return (
        <button
            className={classNames(cls.AppButton, mods, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};