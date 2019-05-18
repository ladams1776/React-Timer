import React from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import TaskListView from "./components/TaskListView/TaskListView";
import EditTaskForm from "./Form/EditTask/EditTaskForm";

 
class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropDownListContracts: this.props.dropDownListContracts
        }
    }


  render() {
    return (
        <HashRouter>
        <div>
          <div className="content">
            {/* @todo: need to manage the state here, if we click on a link we need to hide the list, the edit form is showing */}

            <Route 
                exact
                path="/task/:id" 
                render={(props) => <EditTaskForm {...props} list={this.state.dropDownListContracts}/>}
            />

            <Route 
                exact 
                path="/" 
                render={(props) => <TaskListView {...props} list={this.state.dropDownListContracts}/>}
                // component={TaskListView}
            />  



          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;