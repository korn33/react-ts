import {classNames} from "shared/lib/classNames";
import cls from './ThrowErrorButton.module.scss'
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {AppButton} from "shared/ui/AppButton/AppButton";

interface ThrowErrorButtonProps {
    className?: string
}

export const ThrowErrorButton = ({className}: ThrowErrorButtonProps) => {
    const {t} = useTranslation()
    const [state, setState] = useState(false)
    const onThrow = () => {
        setState(true)
    }
    useEffect(()=>{
        if (state) {
            throw new Error()
        }
    }, [state])

    return (
        <div className={classNames(cls.ThrowErrorButton, {}, [className])}>
            <AppButton onClick={onThrow}>{t('throw_test_button')}</AppButton>
        </div>
    );
};