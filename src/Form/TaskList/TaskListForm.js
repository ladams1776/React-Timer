import React from 'react';
import {
    NavLink
} from "react-router-dom";
import './TaskListForn.css';


export default class TaskListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            existingTasks: props.list
        };
    }

    componentDidMount() {
        this.setState({ tasks: null });
        console.log('component did mount');
        fetch('http://localhost:3001/api/tasks')
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.length > 0) {
                    let tasks = data.map((task) => {
                        return (
                            <li key={task._id}>
                                <NavLink to={"/task/" + task._id} id={task._id} className="task-list" >
                                    <span className="task-list__time"><span className="task-list__time-label">Time: </span> <span className="task-list__time-value"> {task.time}</span></span>
                                    <span className="task-list__description">{task.description}</span>
                                    <span className="task-list__customer">{this.retrieveCustomerNameFromContractId(task.contractId)}</span> - <span className="task-list__contract">{this.retrieveContractNameFromContractId(task.contractId)}</span>
                                </NavLink>
                            </li>
                        )
                    })
                    this.setState({ tasks: tasks });
                }
            });

    }

    render() {
        return (
            <div>
                <div className="task-list__header">
                    <NavLink to={"/task/-1"} className="button-add">New Task</NavLink>
                </div>

                <ul>
                    {this.state.tasks}
                </ul>
            </div>
        );
    }


    retrieveCustomerNameFromContractId(contractId) {
        const existingTasks = this.state.existingTasks;
        let customerName;

        existingTasks.forEach((task) => {
            if (task.key === contractId) {
                customerName = task.customer;
            }
        });

        return customerName;
    }

    retrieveContractNameFromContractId(contractId) {
        const existingTasks = this.state.existingTasks;
        let contractName;

        existingTasks.forEach((task) => {
            if (task.key === contractId) {
                contractName = task.contract;
            }
        });

        return contractName;
    }

}