import React from 'react';
import {useTranslation} from "react-i18next";
import {ThrowErrorButton} from "widgets/ThrowErrorButton";
import {Counter} from "entities/Counter";

const MainPage = () => {
    const {t} = useTranslation('mainPageTranslations')

    return (
        <div>
            {t('main_page')}
            <ThrowErrorButton/>
            <Counter/>
        </div>
    );
};

export default MainPage;