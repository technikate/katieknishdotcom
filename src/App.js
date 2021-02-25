import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
