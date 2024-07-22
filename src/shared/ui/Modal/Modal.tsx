import {classNames, Mods} from "shared/lib/classNames";
import cls from './Modal.module.scss'
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {Portal} from "shared/ui/Portal/Portal";

interface ModalProps {
    className?: string,
    children?: ReactNode
    isOpen: boolean,
    onClose: () => void,
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        isOpen,
        children,
        onClose,
        lazy
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMount, setIsMount] = useState(false)

    const modes: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    const timeoutId = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true)
            timeoutId.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, 200)
        }
    }

    const closeHandlerCallback = useCallback(closeHandler, [onClose])

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandlerCallback()
        }
    }

    const onKeyDownCallback = useCallback(onKeyDown, [closeHandlerCallback])

    const onComponentDestroy = () => {
        clearTimeout(timeoutId.current)
        window.removeEventListener('keydown', onKeyDownCallback)
    }

    const onComponentRender = () => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownCallback)
        } else {
            window.removeEventListener('keydown', onKeyDownCallback);
        }
    }

    useEffect(() => {
        onComponentRender()
        return onComponentDestroy
    }, [isOpen, onKeyDownCallback])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (isOpen && !isMount) {
            setIsMount(true)
        }
        return () => {
            setIsMount(false)
        }
    }, [isOpen]);

    if (lazy && !isMount) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, modes, [className])}>
                <div className={cls.overlay} onClick={closeHandlerCallback}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};