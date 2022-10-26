import { createBrowserRouter } from 'react-router-dom';
import ShowDetailsCourse from '../components/ShowDetailsCourse/ShowDetailsCourse';
import Main from '../layout/Main';
import Blogs from '../page/Blogs/Blogs';
import CategorisCourse from '../page/Courses/CategorisCourse';
import Courses from '../page/Courses/Courses';
import ErrorPage from '../page/ErrorPage/ErrorPage';
import Faq from '../page/Faq/Faq';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <CategorisCourse></CategorisCourse>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <ShowDetailsCourse></ShowDetailsCourse>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ],

    }
])