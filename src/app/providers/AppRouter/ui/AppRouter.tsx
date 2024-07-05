import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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