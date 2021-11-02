import { Provider } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import './App.css';
import DoneTodoPage from './components/DoneTodoPage';
import NotFoundPage from './components/NotFoundPage';
import TodoList from './components/TodoList';
import todoReducer from './reducers/todoReducer';

function App() {
  const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return (
    <div className="App">
      <Provider store={store}>
        <Link to="/" >TodoList</Link>
        <Link to="/done" >DoneList</Link>
        <Switch>
          <Route path='/' exact component={TodoList} />
          <Route path='/done' exact component={DoneTodoPage} />
          <Route path='*' exact component={NotFoundPage} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
