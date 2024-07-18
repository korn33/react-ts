import {classNames} from "shared/lib/classNames";
import cls from './AppButton.module.scss'
import {ButtonHTMLAttributes, FC} from "react";
// import React from "react";

export enum ThemeButtonApp {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButtonApp
}

export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
    const {className,
        children,
        theme,
        ...otherProps} = props

    return (
        <button
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};