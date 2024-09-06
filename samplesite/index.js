import {createRoot} from 'react-dom/client'
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './src/pages/Layout/Layout';
import HomePage from './src/pages/HomePage/HomePage';
import AboutPage from './src/pages/AboutPage/AboutPage';
import Contact from './src/pages/Contact/Contact';
import ServicesPage from './src/pages/ServicesPage/ServicesPage';

const root = document.getElementById('root')
const rootElement = createRoot(root);

const router = createBrowserRouter([{path: '/', element: <App />, errorElement: <div>Errored!</div>, children: [{
    path: '/', element: <Layout><HomePage/></Layout>,
}, {path: '/about', element: <Layout><AboutPage/></Layout>}, {path: '/contact', element: <Layout><Contact/></Layout>}, {path: '/services', element: <Layout><ServicesPage/></Layout>}]}])

rootElement.render(<RouterProvider router={router} />)
