import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogItemList from './components/BlogItemList';
import ContactList from './components/ContactList';
import Nav from './components/Nav';

function App() {
  return (
    <Router>

      <Nav />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/blog" exact>
          <BlogList />
        </Route>

        <Route path='/blog/:id' render={(props) => <BlogItemList {...props} />}>
        </Route>

        <Route path="/contact">
          <ContactList />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
