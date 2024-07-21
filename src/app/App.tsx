import React, {Suspense} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {PageLoader} from "widgets/PageLoader";

const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<PageLoader/>}>
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