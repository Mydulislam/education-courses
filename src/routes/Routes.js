import { createBrowserRouter } from 'react-router-dom';
import ShowDetailsCourse from '../components/ShowDetailsCourse/ShowDetailsCourse';
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
                path : '/category/:id',
                // loader : ,
                // element : 
            },
            {
                path : '/course/:id',
                loader : ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <ShowDetailsCourse></ShowDetailsCourse>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            }
        ]
    }
])