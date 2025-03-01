import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { routes } from '@shared/lib/react-router';
import {LoginPage} from "@pages/auth/auth-page.ui.tsx";

export const AuthPageRoute: RouteObject = {
    path: `${routes.auth.root()}`,
    element: createElement(LoginPage),
    children: [
        {path:`${routes.auth.login()}`, element:createElement(LoginPage)},
    ],
};
