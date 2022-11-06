/**
 * IMPORTS
 */
import { HashRouter } from "react-router-dom";
import { Routes } from "./routes"

/**
 * I am the routes loader. I pass some config props to routes
 */
const RoutesLoader = () => (
    <HashRouter >
        <Routes />
    </HashRouter>

)

/**
 * EXPORTS
 */
export { RoutesLoader }