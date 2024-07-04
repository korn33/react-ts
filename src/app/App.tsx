import React from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider"
import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;