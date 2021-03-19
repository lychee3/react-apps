import messageReducer, { initMessageData } from '../reducers';
import { addMessage } from '../actions'
import "@testing-library/jest-dom/extend-expect";

describe('Reducer', () => {
  it('initial stateを返せるか？', () => {
    expect(messageReducer(undefined, {}).message).toEqual(initMessageData);
  });

  it('ADD指定時に正しく１件追加されるか？', () => {
    expect(
      messageReducer(undefined, addMessage('Run the tests')).message.data
    ).toHaveLength(3)
  });
});