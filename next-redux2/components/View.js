import { useState } from 'react';
import axios from 'axios';

const View = () => {
  const btn = {
    fontSize: "14pt",
    color: "#006",
    padding: "2px 10px"
  };
  const rslt = {
    backgroundColor: "#aff"
  };

  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [fairy, setFairy] = useState("");
  const [behavior, setBehavior] = useState("");

  // API実行ボタンを押すと呼ばれる
  const handleSubmit = (event) => {
    event.preventDefault();
    setFairy("");
    setBehavior("");
    axios.get('/api/fairies/')
    .then(res => {
      setResult1(res.data.map((value, n) => ( <li key={n}>{value.name}</li> )));
      // 取得した配列からランダムで値を取り出す
      setFairy(res.data[Math.floor(Math.random() * res.data.length)].name);
    }) 
    .catch(err => alert(err));

    axios.get('/api/themes/')
    .then(res => {
      setResult2(res.data.map((value, n) => ( <li key={n}>{value.behavior}</li> )));
      // 取得した配列からランダムで値を取り出す
      setBehavior(res.data[Math.floor(Math.random() * res.data.length)].behavior);
    }) 
    .catch(err => alert(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="submit" style={btn} value="API実行" />
      </form>
      <p>API1の実行結果：</p>
      <ul style={rslt}>{result1}</ul>
      <p>API2の実行結果：</p>
      <ul style={rslt}>{result2}</ul>
      <p>妖精（ランダムで取得）：<span style={rslt}>{fairy}</span></p>
      <p>振る舞い（ランダムで取得）：<span style={rslt}>{behavior}</span></p>
    </div>
  );
};

export default View