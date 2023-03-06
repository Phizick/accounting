import React from "react";
import {RouteObject} from "react-router-dom";
import {MainPage} from "../../pages/MainPage/MainPage";
import {DocsPage} from "../../pages/DocsPage/DocsPage";
import {GetPage} from "../../pages/GetPage/GetPage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                path:'/docs',
                element: <DocsPage />
            },
            {
                path:'/get',
                element: <GetPage />
            }
        ]
    }
]