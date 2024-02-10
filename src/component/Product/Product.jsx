import React, { useEffect} from 'react'

export default function Product({ product}) {
  function closeSlide() {
    const imgContainer = document.querySelector('.imgContainer');
    imgContainer.classList.add('d-none');
  } 
    const layerClick = () => {
      const imgContainer = document.querySelector('.imgContainer');
      const imgBox = document.getElementById("test");
      imgContainer.classList.remove('d-none');
      let x = product.image;
      imgBox.setAttribute('src', x);
  }
  useEffect(() => {
  const imgContainer = document.querySelector('.imgContainer');
    if (imgContainer) {
      imgContainer.classList.add('d-none');
    }
  },[])
  return (
    <>
      <div className="col-md-3">
        <div className="port-img">
          <div onClick={layerClick} className="layer d-flex justify-content-center align-items-center"><i class="text-white fa-solid fa-plus"></i></div>
          <img src={product.image} className="image w-50 py-3" alt="products" />
        </div>
      </div> 
      <div className='imgContainer d-none'>
          <i id="close" onClick={closeSlide} class="fa-solid fa-circle-xmark fa-2x "></i>
          <div className='parentImg'>
            <img id="test" className='w-50 bg-transparent' src="" alt="pp" />
          </div>
      </div>
    </>
  )
}
