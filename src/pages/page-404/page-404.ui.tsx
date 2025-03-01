import {Link} from 'react-router-dom'

export function Page404() {
    return (
        <div className="container">
            <h1 className="logo-font">Page not found</h1>
            <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
            <Link
                to='/'
            >
                Go back home
            </Link>
        </div>
    )
}