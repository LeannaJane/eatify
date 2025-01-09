import React from 'react'
import { Routes, Route } from 'react-router-dom';

const pages = import.meta.glob('../pages/**/*.jsx', { eager: true });

const routes = Object.keys(pages).map((path) => {
  const routePath = path
    .replace('../pages', '')
    .replace(/\.jsx$/, '')
    .replace(/home$/i, '');

  const Component = pages[path].default;

  return {
    path: routePath || '/',
    element: <Component />
  };
});

const Index = () => {
  return (
      <Routes>
          {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
          ))}
          <Route path="/*" element={<div>404 - Not Found</div>} />
      </Routes>
  )
}

export default Index
