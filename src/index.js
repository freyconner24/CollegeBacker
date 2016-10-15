import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from 'components/App/App.js'
import ContributorsList from 'components/ContributorsList/ContributorsList.js'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ContributorsList} />
      <Route path="contributors" component={ContributorsList} />
    </Route>
  </Router>
), document.getElementById("app"));
