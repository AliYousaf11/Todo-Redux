import './Todo.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, Delete, Remove } from "../Actions/index";

export const Todo = () => {
  const [inputdata, SetInputdata] = useState(" ");
  const dispatch = useDispatch();
  const list = useSelector((i) => i.Reducer.list);

  return (
    <div className="Main">
      <p><b>Redux Todo List</b></p>
      <div className="Content">
        <input
          type="text"
          placeholder="Enter Value"
          value={inputdata}
          onChange={(event) => SetInputdata(event.target.value)}
        />
        <button onClick={() => dispatch(Add(inputdata), SetInputdata(" "))}>
          +
        </button>
      </div>

      <div>
        {list.map((i) => {
          return (
            <div key={i.id} className="Sub_Content">
              <h3>{i.data}</h3>
              <button onClick={() => dispatch(Delete(i.id))}>-</button>
            </div>
          );
        })}
      </div>

      <button className='Reset' onClick={() => dispatch(Remove())}>Clear All</button>
    </div>
  );
};
