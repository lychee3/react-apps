import "@testing-library/jest-dom/extend-expect";
import * as actions from '../actions';
import * as types from '../types';

describe('actions', () => {
  it('addMessageが返すActionの中身が正しいか？', () => {
    const message = 'Finish docs'
    const expectedAction = {
      type: types.ADD,
      message
 　　}
 　　expect(actions.addMessage(message)).toEqual(expectedAction);
  });
});
