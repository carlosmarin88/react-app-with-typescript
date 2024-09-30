import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';
import { Suspense } from 'react';


export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                routes.map(r =>
                                    <li key={r.to}>
                                        <NavLink to={r.to} className={({ isActive }) => isActive ? 'nav-active' : ''}> {r.name} </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(r => <Route key={r.path} path={r.path} element={<r.Component />} />)
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
