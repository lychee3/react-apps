import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import messageReducer, { initMessageData } from '../reducers';
import Memo from "../components/Memo";

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(messageReducer, reduxState || {message: initMessageData});
  return render(<Provider store={store}>{ui}</Provider>);
}

// Memoコンポーネントのテスト
describe('Memo', () => {

  it('正しく描画できているか？', () => {
    renderWithProviders(<Memo/>, {
      reduxState: {
        message: initMessageData
      }
    });
    expect(screen.getByText('サンプルメッセージ')).toBeInTheDocument();
    expect(screen.getByText('明日の天気は晴れです。')).toBeInTheDocument();
  });
});
