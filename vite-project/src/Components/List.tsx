import { ReactNode } from "react";

interface ListProps<itemPlaceHolder> {
  items: itemPlaceHolder[];
  render: (item: itemPlaceHolder) => ReactNode;
}

function List<itemPlaceHolder,>({ items, render }: ListProps<itemPlaceHolder>) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
}

export default List;
