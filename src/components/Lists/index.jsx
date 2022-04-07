import "./style.css";

export function List({ itens, title }) {
  return (
    <ul className="list">
      <h4>{title}</h4>

      {itens.map((item) => (
        <li key={item.text}>
          <a href={item.link}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
}
