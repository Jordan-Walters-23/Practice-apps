import { ReactNode } from "react";

interface ListProps<itemPlaceHolder> {
  listHead: string
  items: itemPlaceHolder[];
  render: (item: itemPlaceHolder) => ReactNode;
}

function List<itemPlaceHolder>({ listHead, items, render }: ListProps<itemPlaceHolder>) {
  return (
    <>
      <h3>{listHead}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
