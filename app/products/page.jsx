import Link from "next/link";

export default async function Products() {
  const response = await fetch('https://dummyjson.com/products');
  const { products } = await response.json();
  
  return (
    <>
      <ul className="urun">
        {products.map(product => (
          <li className="urun-tek" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="rating">{product.rating}</p>
            <Link href={'/products/' + product.id}>detay göster</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
