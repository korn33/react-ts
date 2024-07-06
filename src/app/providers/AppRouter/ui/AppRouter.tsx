import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig";
import {PageLoader} from "widgets/PageLoader";

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(RouteConfig).map((value) => {
                    return <Route
                        key={value.path}
                        path={value.path}
                        element={
                            <div className={"page-wrapper"}>{value.element}</div>
                        }/>
                })}
            </Routes>
        </Suspense>
    );
};