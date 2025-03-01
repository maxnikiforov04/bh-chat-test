import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import {
    AuthLayout,
    GuestLayout,
} from '@pages/layouts';
import {MainPageRoute} from "@pages/main-page/main-page.route.ts";
import {AuthPageRoute} from "@pages/auth/auth-page.route.tsx";

// https://github.com/remix-run/react-router/discussions/10166
function BubbleError() {
    const error = useRouteError();
    if (error) throw error;
    return null;
}

const router = createBrowserRouter([
    {
        errorElement: <BubbleError />,
        children: [
            {
                element: <GuestLayout />,
                children: [MainPageRoute],
            },
            {
                element: <AuthLayout />,
                children: [AuthPageRoute],
            },
        ],
    },
]);

export function BrowserRouter() {
    return <RouterProvider router={router} />;
}
