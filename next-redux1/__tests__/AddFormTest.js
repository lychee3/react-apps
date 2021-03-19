import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import messageReducer, { initMessageData } from '../reducers';
import AddForm from "../components/AddForm";

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(messageReducer, reduxState || {message: initMessageData});
  return render(<Provider store={store}>{ui}</Provider>);
}

// AddFormコンポーネントのテスト
describe('AddForm', () => {

  it('正しく描画できているか？', () => {
    renderWithProviders(<AddForm/>, {
      reduxState: {
        message: initMessageData
      }
    });
    expect(screen.getByText('メッセージを入力してください。')).toBeInTheDocument();
  });

  it('Addボタン押下を正しく処理できているか？', async () => {
    renderWithProviders(<AddForm/>, {
      reduxState: {
        message: initMessageData
      }
    });

    // Addボタン押下後
    const button = screen.getByText('Add');
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'テストメッセージ' }
    });
    fireEvent.click(button);
    await screen.findAllByText(/メッセージを追加しました。/);
  });
});