import CreateComponentByClass from "./01-base/CreateComponentByClass";
import CreateComponentByClassAnother from "./01-base/CreateComponentByClassAnother";
import CreateComponentByFunction from "./01-base/CreateComponentByFunction";
import ComponentStyle from "./01-base/ComponentStyle";
import BindEvent from "./01-base/BindEvent";
import GetInputValue from "./01-base/GetInputValue";
import ComponentState from "./01-base/ComponentState";
import CycleRender from "./01-base/CycleRender";
import TodoList from "./01-base/practice/TodoList";

const App = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
            <CreateComponentByClass/>
            <CreateComponentByClassAnother/>
            <CreateComponentByFunction/>
            <ComponentStyle/>
            <BindEvent/>
            <GetInputValue/>
            <ComponentState/>
            <CycleRender/>
            <hr/>
            <TodoList/>
        </div>
    );
}

export default App;