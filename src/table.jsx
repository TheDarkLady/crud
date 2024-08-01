function Table(props){
    // console.log(products.products)
    return(
        <>
        <table className="table m-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>price</th>
                    <th>Category</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map(
                        (data)=>(
                            (<tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.category}</td>
                            <td>
                                <button className="btn btn-primary m-1" onClick={
                                    ()=>{
                                        props.edit(data)
                                    }
                                }>Edit</button>
                                <button className="btn btn-danger m-1" onClick={()=>
                                    props.delete(data.id)
                                }>Delete</button>
                            </td>
                            </tr>)
                        )
                    )
                }
            </tbody>

        </table>
        </>
    )
}

export default Table;