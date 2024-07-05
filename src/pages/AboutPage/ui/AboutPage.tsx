import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('aboutPageTranslations')

    return (
        <div>
            {t('about_page')}
        </div>
    );
};

export default AboutPage;