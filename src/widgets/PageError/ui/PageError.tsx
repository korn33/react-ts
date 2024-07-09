import {classNames} from "shared/lib/classNames";
import cls from './PageError.module.scss'
import React from "react";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";

interface PageErrorProps {
    className?: string
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation()
    const reload = ()=>{
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('error_message')}</h1>
            <AppButton onClick={reload}>{t('reload_page')}</AppButton>
        </div>
    );
};