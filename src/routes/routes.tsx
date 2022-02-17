/**
 * IMPORTS
 */
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MainLayout } from "layouts/MainLayout";
import { Home } from "pages/Home";
import { IRoutesProps } from "./routes.d";
import { Courses } from "pages/Courses";

const Routes = (props: IRoutesProps) => {

    return (
        <BrowserRouter >
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={props.basename}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <MainLayout>
                        <Route path="/" exact component={Home} />
                        <Route path="/cursos" exact component={Courses} />
                    </MainLayout>
                </motion.div>
            </AnimatePresence>
        </BrowserRouter>
    )
}

/**
 * EXPORTS
 */
export { Routes }