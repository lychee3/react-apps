import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import View from "../components/View";
import MockAdapter from "axios-mock-adapter";
import axios from 'axios';

// APIのモック
const mockAxios = new MockAdapter(axios);
mockAxios.onGet('/api/fairies/').reply(200, 
  [{ id: 1, name: "ミルモ", instrument: "マラカス", sweets: "チョコレート" }],
);
mockAxios.onGet('/api/themes/').reply(200, 
  [{ id: 1, behavior: "歯を磨く" }],
  [{ id: 2, behavior: "ラジオ体操をする" }],
);

// View Componentのテスト
describe('View', () => {

  it('正しく描画できているか？', () => {
    render(<View />);
    expect(screen.getByText(/API1の実行結果/)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: "API実行"})).toBeInTheDocument();
  });

  it('APIを正しく呼び出せているか？', async () => {
    render(<View />);

    // API実行前
    expect(screen.queryByText('ミルモ')).toBeNull();

    // API実行後
    const button = screen.getByText('API実行');
    fireEvent.click(button);
    await screen.findAllByText(/ミルモ/);
  });
});