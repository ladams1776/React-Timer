import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { LoadinSpinner, FlashMessage } from 'components';
import IndexPage from 'pages/home/IndexPage';
import { TagsPage, AddTagPage } from './pages/tags';
import CreateOrEditTaskPage from 'pages/createOrEditTask/CreateOrEditTaskPage';
import TaskEditFormContextProvider from './contexts/TaskEditFormContext';
import LoadinSpinnerContextProvider from './contexts/LoadinSpinnerContext';
import FlashMessageContextProvider from './contexts/FlashMessageContext';
import './Main.css';

const Main = () => {
  return (
    <FlashMessageContextProvider>
      <LoadinSpinnerContextProvider>
        <TaskEditFormContextProvider>
          <HashRouter>
            <div className="content">
              <FlashMessage />
              <Route exact path="/" render={props => <IndexPage {...props} />} />
              <Route
                exact
                path="/task/:id"
                render={props => <CreateOrEditTaskPage {...props} />}
              />
              <Route exact path="/tags/" render={props => <TagsPage {...props} />} />
              <Route exact path="/tags/:id" render={props => <AddTagPage {...props} />} />
              <LoadinSpinner />
            </div>
          </HashRouter>
        </TaskEditFormContextProvider>
      </LoadinSpinnerContextProvider>
    </FlashMessageContextProvider>
  );
};

export default Main;
