import { useEffect, useState } from "react";

export function ProductItem(props) {
    return (
        <li>
            <strong>{props.ProductLists.name}</strong>
            <p>{props.ProductLists.description}</p>

            <a href="{props.ProductLists.html_url}">Acessar</a>
        </li>
    )
}

export function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('.')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    
    }, []);

return (
    <section className="product-list">
        <h1>Lista</h1>

        <ul>
            {products.map((ProductLists) => {
                return <ProductItem key={ProductLists.name} ProductLists={ProductLists} />
            })}
        </ul>
    </section>
)
}