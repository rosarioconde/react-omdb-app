import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import List from './containers/List'
import 'bootswatch/dist/lux/bootstrap.min.css';

const App = () => {
    return (
        <Fragment>
            <nav className="navbar border-white">
                <a className="navbar-brand" href="/">MovieApp</a>
                
            </nav>
            <main className="bg-dark">
                <div className="container-fluid">
                    <List />
                </div>
            </main>
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

