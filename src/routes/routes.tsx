/**
 * IMPORTS
 */
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MainLayout } from "layouts/MainLayout";
import { Home } from "pages/Home";
import { Courses } from "pages/Courses";
import { Login } from "pages/Login";

const Routes = () => {

    const { pathname } = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={pathname}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <MainLayout>
                    <Route path="/" exact component={Home} />
                    <Route path="/cursos" exact component={Courses} />
                    <Route path="/login" exact component={Login} />
                </MainLayout>
            </motion.div>
        </AnimatePresence>
    )
}

/**
 * EXPORTS
 */
export { Routes }