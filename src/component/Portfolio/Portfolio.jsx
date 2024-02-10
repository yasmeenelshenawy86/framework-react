import axios from "axios"
import { useEffect,useState} from "react"
import Product from "../Product/Product";

export default function Portfolio() {
  const [products, setProducts] = useState([])
  async function getProduct() {
    let { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data)
  }
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      <div className="portfolio mt-5 p-5">
        <div className='container p-4'>
          <h2 className='fw-bold text-uppercase'>portfolio component</h2>
          <div className='d-flex justify-content-center align-items-center'>
            <hr width={100} className='d-inline-block border-4' />
            <i className="fa-solid fa-star fs-5 text-warning px-3"></i>
            <hr width={100} className='d-inline-block border-4'/>
          </div>
          <div className="row">
            {products.map((item, index) => <Product key={item.id} product={item} index={index } />)}
          </div>
        </div>
      </div>
    </>
  )
}
