import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {ThrowErrorButton} from "widgets/ThrowErrorButton";
import {Counter} from "entities/Counter";
import {AppInput} from "shared/ui/AppInput/AppInput";

const MainPage = () => {
    const {t} = useTranslation('mainPageTranslations')

    const [value, setValue] = useState('')

    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <div>
            {t('main_page')}
            <ThrowErrorButton/>
            <Counter/>
            <AppInput onChange={onChange} value={value} placeholder={'temporary'}/>
        </div>
    );
};

export default MainPage;