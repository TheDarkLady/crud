import Table from "./table"
import Crudform from "./form"
import { getData, deleteData, postData, putData } from "./api"
import { useEffect, useState } from "react"


function App(){
  const [products, setProducts] = useState([])
  const [openForm, setOpenForm] = useState(false)
  const [edit, setEdit] = useState(false)
  const [initialForm, setInitialForm] = useState({
    name:'',
    price:'',
    category:''
  })
  useEffect(
     ()=>{

       getProducts()
    },[]
  );

  let  getProducts = async () =>{
    let res = await getData();
    // console.log(res.data)
    setProducts(res.data)
  }

  let  deleteProducts = async (id) =>{
    await deleteData(id);
    getProducts() 
  } 

  let  addProducts = async (product) =>{
    let data ={
      name:product.name,
      price:product.price,
      category:product.category
    }

    if(edit)
      await putData(product.id, data)

    else
    await postData(data)

    await postData(data);
    getProducts();
    setOpenForm(false)
  }
  let  editProducts = async (data) =>{
    setInitialForm(data)
    // await postData(data);
    // getProducts();
    setOpenForm(true)
    setEdit(true)
    
  }

  let closeForm = () =>{
    setOpenForm(false)
  }

  let showForm = () =>{
    setOpenForm(true);
    setInitialForm(
      {
        name:'',
        price:'',
        category:''
      }
    )
  }
  
  return(
    <>
    <div className="wrapper m-5 w-50">
    <h1>This is CRUD DEMO</h1>
    <button className="btn btn-primary" onClick={
      ()=>{
        showForm()
      }
    }> Add Product</button>
    <Table products={products} delete={deleteProducts} edit={editProducts}></Table>
    {
      openForm && <Crudform closeForm={closeForm} data= {initialForm} add={addProducts}></Crudform>
    }
    </div>
    </>
  )
}

export default App