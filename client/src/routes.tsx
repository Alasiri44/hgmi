
import App from "./App";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Sermons from "./pages/sermons";
import Ministries from "./pages/ministries";
import Events from "./pages/events";
import Give from "./pages/give";


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
                path: 'contact',
                element: < Contact/>
            },
            {
                path: 'sermons',
                element: < Sermons/>
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