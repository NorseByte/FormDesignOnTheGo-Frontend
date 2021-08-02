import Layout from "./components/layout/Layout";
import {Switch, Route} from "react-router-dom"

/* Import Pages */
import HomePage from "./components/pages/HomePage";
import FormPage from "./components/pages/FormPage";

function App() {

    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>

                <Route path="/form/:formid">
                    <FormPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
