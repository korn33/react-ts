import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/ThemeProvider";
import './shared/config/i18n/i18n'
import {ErrorBoundary} from "app/providers/ErrorProvider";
import {StoreProvider} from "app/providers/StoreProvider";

render(
    <ErrorBoundary>
        <BrowserRouter>
            <StoreProvider>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </StoreProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
)