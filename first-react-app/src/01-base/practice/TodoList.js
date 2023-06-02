import React, {Component, createRef} from 'react';
import '../../assets/css/todoList.css'

export default class TodoList extends Component {
    state = {
        todoItems: []
    }

    todoItemContent = createRef();

    addTodoItem() {
        const todoItem = {
            id: 0,
            content: ''
        }
        todoItem.id = this.state.todoItems.length + 1;
        todoItem.content = this.todoItemContent.current.value;
        this.setState({
            todoItems: [...this.state.todoItems, todoItem]
        });
        this.todoItemContent.current.value = '';
    }

    removeItem(index) {
        const tempArray = this.state.todoItems.concat();
        tempArray.splice(index, 1);
        this.setState({
            todoItems: tempArray
        })
    }

    render() {
        return (
            <div className="todo-list-container">
                <div className="input-container">
                    <input type="text" placeholder="please input your todo item" ref={this.todoItemContent}/>
                    <button className="add-btn" onClick={() => this.addTodoItem()}>Add</button>
                </div>
                <hr/>
                <div>
                    <ul>
                        {this.state.todoItems.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    {item.content}
                                    <button className="remove-btn" onClick={() => this.removeItem(index)}>Remove
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {this.state.todoItems.length === 0 && <div>暂无待办事项</div>}
                <div className={this.state.todoItems.length === 0 ? '' : 'hidden'}>暂无待办事项</div>
            </div>
        )
    }
}