import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { HomePage } from "../Containers/Home";
import Nav from "../Containers/Nav";
import { routes } from "./routes";
import AOS from "aos";

function Routes(){

    useEffect(() =>{
        AOS.init({
            duration: 800
        })
    });

    return(
        <Router>
            <Nav>
                <Switch>
                    {
                        routes.map(route =>(
                            <Route path={route.path} key={route.name} exact render={() => <route.component />} />
                        ) )
                    }
                </Switch>
            </Nav>
        </Router>
    );
};

export default Routes;