import {classNames} from "shared/lib/classNames";
import cls from './LoginForm.module.scss'
import {AppButton, ThemeButtonApp} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";
import {AppInput} from "shared/ui/AppInput/AppInput";
import {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {loginActions, loginReducer} from "../../model/slice/LoginSlice";
import {loginByUsername} from "../../model/services/loginByUserName";
import {AppText, AppTextTheme} from "shared/ui/AppText/AppText";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
    className?: string,
    onSuccess: () => void
}

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        onSuccess
    } = props

    const {t} = useTranslation()

    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)


    const onChangeUsernameCallback = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePasswordCallback = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClickCallback = useCallback(async () => {
        const result = await dispatch(loginByUsername({username, password}))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, username, password, onSuccess])

    return (
       <DynamicModuleLoader name="login" reducer={loginReducer}>
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
       </DynamicModuleLoader>
    )
})

export default LoginForm