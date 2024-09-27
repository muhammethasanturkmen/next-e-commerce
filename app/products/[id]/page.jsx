
export default async function ProductsDetails({ params }) {
  const { id } = params;
  
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  console.log(id);
  console.log(data);
  
  return (
    <>
      <div className="container-urun">
          <div className="resim">
            <img src={data.thumbnail} />
          </div>
          <div className="urun-content">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h6>${data.price}</h6>
            <div className="urun-btn">
              <div className="arti-btn">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
              <button>Add to cart</button>
            </div>
          </div>
      </div>
    </>
  )
}