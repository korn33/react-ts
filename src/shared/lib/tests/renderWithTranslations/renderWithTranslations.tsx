import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nForTesting from "shared/config/i18n/i18nForTesting";

export function renderWithTranslations(component: ReactNode){
    return render(
        <I18nextProvider i18n={i18nForTesting}>
            {component}
        </I18nextProvider>
    )
}