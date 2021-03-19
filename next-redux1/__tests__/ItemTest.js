import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Item from "../components/Item";

// View Componentのテスト
describe('Item', () => {

  it('正しく描画できているか？', () => {
    render(<table><tbody><Item key="item1" message="テスト" index="1"/></tbody></table>);
    expect(screen.getByRole('cell')).toBeInTheDocument();
  });
});
