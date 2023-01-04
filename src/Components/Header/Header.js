import React, { useState } from "react";
import "./Header.css";
export default function Header(props) {
  const [search, setsearch] = useState(false);
  const onSearchHandler = () => {
    setsearch((search) => !search)
  };
const [input,setInput]=useState();
  const onSubmitHandler = () => {
    props.value(input);
  };
  const onChangeHandler=(event)=>{
    setInput(event.target.value);
  }
  return (
    <div className="Hcointainer">
      <span className="logo">City Weather</span>
      <div className="ssbar">
        <span className="search" on onClick={onSearchHandler}>
          Search
        </span>
        {search ? (
          <div>
            <input type="text" placeholder="Country" className="inputS" onChange={onChangeHandler}/>{" "}
            <button className="bbtn" onClick={onSubmitHandler}>
              Submit
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
