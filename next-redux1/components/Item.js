const Item = (props) => {
  const th = {
    fontSize: "14pt",
    backgroundColor: "blue",
    color: "white",
    padding: "5px 10px",
    width: "50px"
  };
  const td = {
    fontSize: "14px",
    backgroundColor: "white",
    color: "darkblue",
    padding: "5px 10px",
    border: "1px solid lightblue",
    minWidth: "300px"
  };

  return (
    <tr>
      <th style={th}>No, {props.index}</th>
      <td style={td}>{props.message}</td>
    </tr>
  );
};

export default Item;