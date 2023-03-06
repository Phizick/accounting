import React from "react";
import {RouteObject} from "react-router-dom";
import {MainPage} from "../../pages/MainPage/MainPage";

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