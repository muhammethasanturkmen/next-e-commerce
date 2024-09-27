import Link from "next/link";


export default async function ProductsCategory({ params }) {
  const { id, slug } = params;

  const response = await fetch(`https://dummyjson.com/products/category/${slug}`);
  const { products } = await response.json();
  
  return (
    <>
      <ul className="products-list">
        {products.map(product => (
          <li key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="rating">{product.rating}</p>
            <Link href={'/products/' + product.id} className="details-link">detay göster</Link>
          </li> 
        ))}
      </ul>
    </>
  )
}
