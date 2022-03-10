/**
 * IMPORTS
 */
import { useSelector } from "react-redux";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { selectUser } from "features/user/selectors";
import { MainLayout } from "layouts/MainLayout";
import { Home } from "pages/Home";
import { Courses } from "pages/Courses";
import { Login } from "pages/Login";
import { PurchasedCourses } from "pages/PurchasedCourses";

const Routes = () => {

    const { pathname } = useLocation();

    const { signed } = useSelector(selectUser);

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
                    {signed &&
                        <>
                            <Route path="/cursos-comprados" exact component={PurchasedCourses} />

                        </>
                    }
                </MainLayout>
            </motion.div>
        </AnimatePresence>
    )
}

/**
 * EXPORTS
 */
export { Routes }