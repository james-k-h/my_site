import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMePage from './screens/AboutMePage';
import ProjectsContactMe from './screens/ProjectsContactMe';
import BlogPage from './screens/BlogPage';
import HomePage from './screens/HomePage';
import UkraineWar from './components/blog/UkraineWar';
import Links from './screens/Links';

import {
  JavaPlatformer,
  CodeEditor,
  BudgetTracker,
  AnimalApp,
  ECommercePOC,
  JobSearch,
  MernDash,
  NextPropertyRental,
  Communities,
  Blog,
} from './components/projects/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about-me',
    element: <AboutMePage />,
  },
  {
    path: '/projects',
    element: <ProjectsContactMe />,
  },
  {
    path: '/projects/budget_tracker',
    element: <BudgetTracker />,
  },
  {
    path: '/projects/code_editor',
    element: <CodeEditor />,
  },
  {
    path: '/projects/animal_app',
    element: <AnimalApp />,
  },
  {
    path: '/projects/ecommerce_poc',
    element: <ECommercePOC />,
  },
  {
    path: '/projects/my_blog',
    element: <Blog />,
  },
  {
    path: '/projects/java_platformer',
    element: <JavaPlatformer />,
  },
  {
    path: '/projects/job_search',
    element: <JobSearch />,
  },
  {
    path: '/projects/mern_dash',
    element: <MernDash />,
  },
  {
    path: '/projects/next_property_rental',
    element: <NextPropertyRental />,
  },
  {
    path: '/projects/communities',
    element: <Communities />,
  },
  {
    path: '/links',
    element: <Links />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/ukraine_war',
    element: <UkraineWar />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
