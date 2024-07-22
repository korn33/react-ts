import {classNames} from "shared/lib/classNames";
import cls from './AppInput.module.scss'
import React, {InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void
    autofocus?: boolean
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autofocus,
        ...otherProps
    } = props

    const [caretPixelPosition, setCaretPixelPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef(null);
    const caretRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Создаем canvas и получаем контекст
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvasRef.current = context;
    }, []);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            inputRef.current.focus()
        }
    }, [autofocus]);

    const measureTextWidth = (text: string) => {
        if (canvasRef.current && inputRef.current) {
            const context = canvasRef.current;
            // Устанавливаем шрифт такой же, как у input
            const computedStyle = window.getComputedStyle(inputRef.current);
            context.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;

            // Измеряем ширину текста
            const metrics = context.measureText(text);
            return metrics.width;
        }
        return 0;
    };
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        updateCaretPosition(e.target);
    }

    const updateCaretPosition = (input: any) => {
        const caretPos = input.selectionStart;
        const textBeforeCaret = input.value.substring(0, caretPos);
        const caretPixelPosition = measureTextWidth(textBeforeCaret);
        setCaretPixelPosition(caretPixelPosition);

        // Перезапускаем анимацию каретки
        if (caretRef.current) {
            caretRef.current.style.animation = 'none';
            // Триггерим перерисовку
            // /*
            // Этот шаг необходим, чтобы браузер "заметил" изменения в стиле и применил их.
            //
            // offsetWidth — это свойство, которое возвращает ширину элемента в пикселях.
            // Однако, его использование в данном случае не для получения значения.
            // Когда мы запрашиваем значение свойства, браузер вычисляет стили элемента,
            // что включает в себя перерисовку и повторное вычисление стилей.
            // void оператор используется, чтобы результат выражения (значение offsetWidth) был отброшен.
            // Нам не нужно это значение, мы просто используем доступ к свойству
            // как способ принудительного обновления стилей.
            // */
            void caretRef.current.offsetWidth;
            caretRef.current.style.animation = '';
        }
    };

    const handleCaretPositionChange = () => {
        if (inputRef.current) {
            updateCaretPosition(inputRef.current);
        }
    };

    useEffect(() => {
        const input = inputRef.current;
        if (input) {
            input.addEventListener('click', handleCaretPositionChange);
            input.addEventListener('keyup', handleCaretPositionChange);
            input.addEventListener('keydown', handleCaretPositionChange);
        }
        return () => {
            if (input) {
                input.removeEventListener('click', handleCaretPositionChange);
                input.removeEventListener('keyup', handleCaretPositionChange);
                input.removeEventListener('keydown', handleCaretPositionChange);
            }
        };
    }, []);

    const [isFocused, setIsFocused] = useState(false)

    const onFocus = () => {
        setIsFocused(true)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    return (
        <div className={classNames(cls.AppInput, {}, [className])}>
            {placeholder && (
            <div className={cls.placeholder}>
                {`${placeholder}:`}
            </div>
            )}
            <div
                className={classNames(cls.caretWrapper, {}, [])}
            >
                <input
                    ref={inputRef}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{left: `${caretPixelPosition}px`}}
                        ref={caretRef}
                    />
                )}
            </div>
        </div>
    );
})