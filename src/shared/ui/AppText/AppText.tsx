import {classNames} from "shared/lib/classNames";
import cls from './AppText.module.scss'

export enum AppTextTheme {
    PRIMARY = 'primary',
    ERROR = 'error '
}

interface AppTextProps {
    className?: string
    title?: string,
    text?: string,
    theme?: AppTextTheme
}

export const AppText = (props: AppTextProps) => {
    const {
        className,
        title,
        text,
        theme = AppTextTheme.PRIMARY
    } = props


    return (
        <div className={classNames(cls.AppText, {[cls[theme]]: true}, [className])}>
            {title && <h3 className={cls.title}>{title}</h3>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};