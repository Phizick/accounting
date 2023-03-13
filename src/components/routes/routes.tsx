import React from "react";
import {RouteObject} from "react-router-dom";
import {MainPage} from "../../pages/MainPage/MainPage";
import {DocsPage} from "../../pages/DocsPage/DocsPage";
import {BeginPage} from "../../pages/BeginPage/BeginPage";
import {AccountingPage} from "../../pages/AccountingPage/Accounting";
import {ConsultingPage} from "../../pages/ConsaltPage/ConsaltPage";
import {SalaryPage} from "../../pages/SalaryPage/SalaryPage";
import {AnyElsePage} from "../../pages/AnyElsePAge/AnyElsePage";


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
    {
        path: '/accounting',
        element: <AccountingPage />
    },
    {
        path: '/consulting',
        element: <ConsultingPage />
    },
    {
        path: '/salary',
        element: <SalaryPage/>
    },
    {
        path: '/any',
        element: <AnyElsePage/>
    }
]