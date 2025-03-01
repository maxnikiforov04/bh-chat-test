import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { routes } from '@shared/lib/react-router';
import {MainPage} from "@pages/main-page/main-page.ui.tsx";

export const MainPageRoute: RouteObject = {
    path: `${routes.home()}`,
    element: createElement(MainPage),
    children: [],
};
