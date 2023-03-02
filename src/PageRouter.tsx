import { Switch, Route, Redirect } from 'wouter'

//* VIEWS
import Home from './views/Home/Home'
import NotFound from './views/NotFound/NotFound'
import Dashboard from './views/Dashboard/Dashboard'
import Login from './views/Login/Login'
import CreateEvent from './views/Create/CreateEvent'

function App(): JSX.Element {

  return (
    <div className="App" >
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/create" component={CreateEvent} />
        <Route path='/404' component={NotFound} />

        {/* NOT PATH FOUND */}
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  )
}

export default App