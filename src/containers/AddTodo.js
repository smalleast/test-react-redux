import {connect} from 'react-redux';
import {addTodo} from "../actions";

let AddTodo = () => {
  return (
    <div>
      <from onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ""
      }}>
        <input type="text" ref={node => {
          input = node
        }}/>
        <button type="submit"/>
      </from>
    </div>
  )
};
AddTodo = connect()(AddTodo);
export default AddTodo;
