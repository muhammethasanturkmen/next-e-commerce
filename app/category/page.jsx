import Link from "next/link";

export default async function Category() {
  
  const response = await fetch('https://dummyjson.com/products/categories');
  const data = await response.json();
  console.log(data);
  
  return (
    <>
      <ul className="categori">
        {data.map(category => (
         <Link className="link" href={'/category/' + category.slug}> <li key={category.id}>{category.name}  </li> </Link>
        ))}
        <Link className="link" href={'/products'}> <li>All  </li> </Link>
      </ul>
    </>
  )
}