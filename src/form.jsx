import { useState } from "react";

function Crudform(props){
    const [product, setProduct] = useState(props.data)
    const [submitted, setSubmitted] = useState(false)
    let changeFormData = (event)=> {
        const {name, value} = event.target;

        setProduct({...product, [name]:value})
    }
    return(
        <>
        <div className="form-overlay">
        <form action="">
            <div className="form-group">
                <label htmlFor="">NAME</label>
                <input className="form-control mt-2" type="text" name="name" placeholder="product name" value={product.name} onChange={changeFormData}/>
                {
                    submitted && product.name === '' && <span className="text-danger">Product Name Required</span>
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Price</label>
                <input className="form-control mt-2" type="number" name="price" placeholder="product price" value={product.price} onChange={changeFormData}/>
                {
                    submitted && product.price === '' && <span className="text-danger">Product Price Required</span>
                }
            </div>
            <div className="form-group">
            <label htmlFor="">category</label>
                <select className="form-control mt-2" name="category" id="" value={product.category} onChange={changeFormData}> 
                    <option value="-1"></option>
                    <option value="Mobile">Mobile</option>
                    <option value="Tablets">Tablets</option>
                    <option value="laptops">laptops</option>
                </select>
                {
                    submitted && product.name === '' && <span className="text-danger">Product Category Required</span>
                }
            </div>
            <button className="btn btn-primary float-end" onClick={
                (e)=>{
                    setSubmitted(true)
                    e.preventDefault();
                    if(!!product.name && !!product.price && !!product.category){
                        props.add(product)
                    }
                }
            }>Send</button>
            <button className="btn btn-danger float-end"  onClick={
                (e)=>{
                    e.preventDefault()
                    props.closeForm()
                }
            }>Cancle</button>
        </form>
        </div>
        </>
    )
}

export default Crudform;