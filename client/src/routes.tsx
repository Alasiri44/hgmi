
import App from "./App";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Sermons from "./pages/sermons";
import Ministries from "./pages/ministries";
import Events from "./pages/events";
import Give from "./pages/give";
import Register from "./pages/register";
import SermonsList from "./features/sermonsList";
import ReelsList from "./features/reelsList";
import BooksList from "./features/booksList";
import { Navigate } from "react-router-dom";


export const routes = [
    {
        path: '/',
        element: < App/>,
        children : [
            {
                index: true,
                element: < Home />
            },
            {
                path: 'about',
                element: < About/>
            },
            {
                path: 'register',
                element: < Register/>
            },
            {
                path: 'contact',
                element: < Contact/>
            },
            {
                path: 'sermons',
                element: < Sermons/>,
                children:[
                    {
                        index: true,
                        element: <Navigate to="preachings" replace />
                    },
                    {
                        path: "preachings",
                        element: < SermonsList/>
                    },
                    {
                        path:"reels",
                        element: < ReelsList/>
                    },
                    {
                        path: 'books',
                        element: < BooksList/>
                    }
                ]
            },
            {
                path: 'ministries',
                element: < Ministries/>
            },
            {
                path: 'events',
                element: < Events/>
            },
            {
                path: 'give',
                element: < Give/>
            }
        ]
    }
]