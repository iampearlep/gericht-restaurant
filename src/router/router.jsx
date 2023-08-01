import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import Root from "../pages/Root"
import About from "../pages/About"
import Menu from "../pages/Menu"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import SearchMeals from "../pages/SearchMeals"
import ProductDetail from "../pages/ProductDetail"


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Root />
            },
            {
                path:"about",
                element: <About />
            },
            {
                path:"menu",
                element: <Menu />
            },
            {
                path:"contact",
                element: <Contact />
            },
            {
                path:"services",
                element: <Services />
            },
            {
                path:"search-meals",
                element: <SearchMeals />
            },
            {
                path:"search-meals/:id",
                element: <ProductDetail />
            },
        ]
    }
])