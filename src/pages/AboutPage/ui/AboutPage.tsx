import React from 'react';
import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";

const AboutPage = () => {
    const {t} = useTranslation('aboutPageTranslations')

    return (
        <div>
            {t('about_page')}
            <Counter/>
        </div>
    );
};

export default AboutPage;