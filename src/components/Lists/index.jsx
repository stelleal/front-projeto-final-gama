import "./style.css";

export function List({ itens, titulo }) {
  return (
    <ul className="lista">
      <h4>{titulo}</h4>

      {itens.map((item) => (
        <li key={item.nome}>
          <a href={item.link}>{item.nome}</a>
        </li>
      ))}
    </ul>
  );
}
