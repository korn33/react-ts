import React from 'react';
import {useTranslation} from "react-i18next";
import {ThrowErrorButton} from "widgets/ThrowErrorButton";

const MainPage = () => {
    const {t} = useTranslation('mainPageTranslations')

    return (
        <div>
            {t('main_page')}
            <ThrowErrorButton/>
        </div>
    );
};

export default MainPage;