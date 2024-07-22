import {classNames} from "shared/lib/classNames";
import cls from './LoginForm.module.scss'
import {AppButton} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";
import {AppInput} from "shared/ui/AppInput/AppInput";

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <AppInput
                className={cls.input}
                placeholder={t('loginForm_login_input_placeholder')}
                autofocus={true}
            />
            <AppInput
                className={cls.input}
                placeholder={t('loginForm_password_input_placeholder')}
            />
            <AppButton className={cls.loginBtn}>{t('log_in_button')}</AppButton>
        </div>
    )
}