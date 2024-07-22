import {classNames} from "shared/lib/classNames";
import cls from './LoginForm.module.scss'
import {AppButton, ThemeButtonApp} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";
import {AppInput} from "shared/ui/AppInput/AppInput";
import {memo, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/LoginSlice";
import {getLoginState} from "../../model/selectors/GetLoginState";
import {loginByUsername} from "../../model/services/loginByUserName";
import {AppText, AppTextTheme} from "shared/ui/AppText/AppText";

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation()

    const dispatch = useDispatch()
    const {username, password, isLoading, error} = useSelector(getLoginState)

    const onChangeUsernameCallback = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePasswordCallback = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClickCallback = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <AppText title={t('login_title')}/>
            {error && (
                <AppText
                    theme={AppTextTheme.ERROR}
                    text={t('error_login_message')}
                />
            )}
            <AppInput
                className={cls.input}
                placeholder={t('loginForm_login_input_placeholder')}
                autofocus={true}
                onChange={onChangeUsernameCallback}
                value={username}
            />
            <AppInput
                className={cls.input}
                placeholder={t('loginForm_password_input_placeholder')}
                onChange={onChangePasswordCallback}
                value={password}
            />
            <AppButton
                className={cls.loginBtn}
                theme={ThemeButtonApp.OUTLINE}
                onClick={onLoginClickCallback}
                disabled={isLoading}
            >{t('log_in_button')}</AppButton>
        </div>
    )
})