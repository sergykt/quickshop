import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { routeConfig } from '../config/routeConfig';

const AppRoutes = () =>
  routeConfig.map(({ element, path }) => <Route key={path} path={path} element={element} />);

export const AppRouter = () => (
  <div className='page-wrapper'>
    <Suspense fallback={<PageLoader />}>
      <Routes>{AppRoutes()}</Routes>
    </Suspense>
  </div>
);
