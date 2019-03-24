import Container from "app/src/components/Container";
import store from "app/src/store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/:userId?" component={Container} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById("app"),
);
