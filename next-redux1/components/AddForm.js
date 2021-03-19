import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { addMessage } from '../actions'

const AddForm = () => {
  const input = {
    fontSize: "16pt",
    color: "#006",
    padding: "1px",
    margin: "5px 0px"
  };
  const btn = {
    fontSize: "14pt",
    color: "#006",
    padding: "2px 10px"
  };
  const msg = {
    fontSize: "16pt",
    color: "006",
    margin: "5px 10px"
  }

  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const info = useSelector((state) => state.message.info);

  // Addボタンを押すと呼ばれる
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(message));
    setMessage("");
  };

  return (
    <div>
      <p style={msg}>{info}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" size="40"
               onChange={(e) => setMessage(e.target.value)} 
               style={input} value={message} required />
        <input type="submit" style={btn} value="Add" />
      </form>
    </div>
  );
};

export default AddForm