import React from "react";
import {RouteObject} from "react-router-dom";
import {MainPage} from "../../pages/MainPage/MainPage";
import {DocsPage} from "../../pages/DocsPage/DocsPage";
import {BeginPage} from "../../pages/BeginPage/BeginPage";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path:'/docs',
        element: <DocsPage />
    },
    {
        path:'/begin',
        element: <BeginPage />
    },
]