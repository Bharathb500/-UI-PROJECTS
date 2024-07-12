import { createRoot } from 'react-dom/client'
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([{
    path: '/', element: <App />, errorElement: <i>error occured</i>, children: [
        {
            path: "/about",
            element: <i>about</i>
        },
    ],
}, { path: '/contact', element: <b>contact</b> },{ path: '/login', element: <b>login</b> }])
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)