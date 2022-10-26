import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blogs from '../page/Blogs/Blogs';
import Courses from '../page/Courses/Courses';
import Faq from '../page/Faq/Faq';
import Home from '../page/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])