import Layout from "./components/layout/Layout";
import {Switch, Route, Redirect} from "react-router-dom"
import {useEffect} from "react";

/* Import Pages */
import HomePage from "./components/pages/HomePage";
import FormPage from "./components/pages/FormPage";
import SharePage from "./components/pages/SharePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import FormPageDetail from "./components/pages/FormPageDetail";
import ArchivePage from "./components/pages/ArchivePage"

/* Import Actions and Dispatch */
import {contextAction} from "./store/context-slice";
import {useDispatch} from "react-redux";

function App() {

    /* Init Redux Store */
    const dispatch = useDispatch();

    /* Register big and small screen */
    useEffect(() => {
        const handleResize = () => {
            dispatch(contextAction.setIsBig(window.innerWidth >= 1200))
        };

        /* Windows Listner with handler */
        window.addEventListener("resize", handleResize);

        /* Cleanup */
        return () => window.removeEventListener("resize", handleResize);

        /* Empty dependency so it only run once, can add disptach to make useEffect happy, do not
        * change anyway so useEffect only run once. */
    }, [dispatch])

    return (
        <Layout>
            <Switch>
                <Route path="/create">
                    <HomePage />
                </Route>

                <Route path="/form" exact>
                    <FormPage />
                </Route>

                <Route path="/forms/:formid">
                    <FormPageDetail />
                </Route>

                <Route path="/share">
                    <SharePage />
                </Route>

                <Route path="/archive">
                    <ArchivePage />
                </Route>

                <Redirect from="/" to="/create" exact/>

                <Route path='*'>
                    <NotFoundPage />
                </Route>

            </Switch>
        </Layout>
    );
}

export default App;
