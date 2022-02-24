/**
 * IMPORTS
 */
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes"

/**
 * I am the routes loader. I pass some config props to routes
 */
const RoutesLoader = () => (
    <BrowserRouter >
        <Routes />
    </BrowserRouter>

)

/**
 * EXPORTS
 */
export { RoutesLoader }