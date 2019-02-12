import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./common/header/header"
import Home from "./page/home"
import NoFind from "./page/404"
import About from "./page/about"
import Web from "./page/web"
import Record from "./page/record"
import Info from "./page/info"
import Comment from "./page/comment"
import "./App.css"

class AppRouter extends React.Component {
    state = {
        isBottom: false
    };

    onScrollHandle(event) {
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;
        const scrollTop = event.target.scrollTop;
        const isBottom = (clientHeight + scrollTop === scrollHeight);
        if (isBottom) {
            this.setState({
                isBottom
            })
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.location.pathname)    // path/to/abc
    }

    render() {
        return (
            <Router>
                <div onScroll={this.onScrollHandle.bind(this)}>
                    <Header/>
                    <div>
                        <div className="jumbotron text-center">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1"><h3>不积跬步，无以至千里</h3> <h6>不积小流，无以成江海</h6></div>
                            </div>
                        </div>
                        <div className="section" id="section">
                            <div className="box">
                                <Switch>
                                    <Route path="/" component={Home} exact isBottom={this.state.isBottom}/>
                                    <Route path="/web" component={Web} exact/>
                                    <Route path="/record" component={Record} exact/>
                                    <Route path="/about" component={About} exact/>
                                    <Route path="/info/:id" component={Info} exact/>
                                    <Route path="/comment" component={Comment} replace/>
                                    <Route path="/*" component={NoFind} replace/>
                                </Switch>
                            </div>
                        </div>
                        <div className="footer">footer</div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default AppRouter
