import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { appRoutes } from '@/shared/const/router';

interface RoutePropsWithAuth {
  path: string;
  element: ReactNode;
}

export const routeConfig: RoutePropsWithAuth[] = [
  {
    path: appRoutes.mainPage,
    element: <MainPage />,
  },
  {
    path: appRoutes.notFound,
    element: <Navigate to={appRoutes.mainPage} replace />,
  },
];
