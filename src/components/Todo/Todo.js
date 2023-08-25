import React  from 'react'
import "./Todo.css"
export default function Todo(props) {

const{items,deleteitems}=props
const listItems=
items.map(item=>{    
  if(item.name.length!==0&&item.num.length!==0&&item.id.length!==0){
     return(<tr key={Math.random()}>

    <td className="width">{item.name}</td>
      <td className="width">{item.num}</td>
      <td  className="del"onClick={()=>deleteitems(item.id)}>

x      </td>
      </tr>
      )

  }
})


  return (
    <div >
<div className="center">

<table className='flex'>
  <thead>
    <tr>
    
<th className="name">Name</th>
<th className="tel" >Phone No</th>
<th className="action">Action</th>
    </tr>
  </thead>


<tbody>
{listItems}
</tbody>
  
  
  




</table>
</div>
</div>
  )
}
