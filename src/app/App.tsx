import React, {Suspense} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider"
import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading translations...</div>}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;