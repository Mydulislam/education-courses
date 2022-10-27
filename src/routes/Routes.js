import { createBrowserRouter } from 'react-router-dom';
import ShowDetailsCourse from '../components/ShowDetailsCourse/ShowDetailsCourse';
import Main from '../layout/Main';
import Blogs from '../page/Blogs/Blogs';
import CategorisCourse from '../page/Courses/CategorisCourse';
import Courses from '../page/Courses/Courses';
import ErrorPage from '../page/ErrorPage/ErrorPage';
import Faq from '../page/Faq/Faq';
import Login from '../page/Login/Login';
import TermAndConditions from '../page/others/TermAndConditions';
import Register from '../page/Register/Register';

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
                loader: ({ params }) => fetch(`https://assignment-10-server-lilac.vercel.app/category/${params.id}`),
                element: <CategorisCourse></CategorisCourse>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-lilac.vercel.app/course/${params.id}`),
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
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/terms',
                element: <TermAndConditions></TermAndConditions>
            }
        ],

    }
])