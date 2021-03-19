import { useSelector } from 'react-redux'
import Item from './Item'

const Memo = () => {
  let n = 0;
  const data = useSelector((state) => state.message.data);
  const items = data.map((value) => (
    <Item key={"item"+n} message={value.message} index={n++} />
  ));

  return (
    <table><tbody>
    {items}
    </tbody></table>
  );
};

export default Memo