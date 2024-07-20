import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {Modal} from "shared/ui/Modal/Modal";
import {AppButton, ThemeButtonApp} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()

    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(prevState => !prevState)
    }

    const toggleModalCallback = useCallback(toggleModal, [isOpen])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppButton
                theme={ThemeButtonApp.CLEAR_INVERTED}
                onClick={toggleModal}
                className={cls.links}
            >
                {t('log_in_button')}
            </AppButton>
            <Modal isOpen={isOpen} onClose={toggleModalCallback}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at corporis delectus eveniet magni omnis optio possimus quas ut!
                </p>
            </Modal>
        </div>
    );
};