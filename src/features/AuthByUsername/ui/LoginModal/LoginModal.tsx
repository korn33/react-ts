import {classNames} from "shared/lib/classNames";
import cls from './LoginModal.module.scss'
import {Modal} from "shared/ui/Modal/Modal";
import {LoginFormAsync} from "../LoginForm/LoginFormAsync";
import {Suspense} from "react";
import {AppLoader} from "shared/ui/AppLoader/AppLoader";

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = (
    {
        className,
        isOpen,
        onClose
    }: LoginModalProps) => {

    return (
            <Modal
                className={classNames(cls.LoginModal, {}, [className])}
                isOpen={isOpen}
                onClose={onClose}
                lazy={true}
            >
                <Suspense fallback={<AppLoader/>}>
                    <LoginFormAsync/>
                </Suspense>
            </Modal>
    );
};