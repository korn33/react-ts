import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppButton, ThemeButtonApp} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const openModalCallback = useCallback(openModal, [isOpen])

    const closeModal = () => {
        setIsOpen(false)
    }

    const closeModalCallback = useCallback(closeModal, [isOpen])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppButton
                theme={ThemeButtonApp.CLEAR_INVERTED}
                onClick={openModalCallback}
                className={cls.links}
            >
                {t('log_in_button')}
            </AppButton>
            <LoginModal isOpen={isOpen} onClose={closeModalCallback}/>
        </div>
    );
};