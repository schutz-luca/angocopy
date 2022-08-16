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
import { Join } from "pages/Join";
import { Login } from "pages/Login";
import { PurchasedCourses } from "pages/PurchasedCourses";
import { ViewCourse } from "pages/Courses/view";
import { ViewPurchasedCourse } from "pages/PurchasedCourses/view";

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
                    <Route path="/cursos/:id" exact component={ViewCourse} />
                    <Route path="/cursos-comprados/:id" exact component={ViewPurchasedCourse} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/cadastro" exact component={Join} />
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