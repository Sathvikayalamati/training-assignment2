let array1=[{
    empid:1,
    empname:"sathvika",
    empcompany:"google",
    empsalary:"100000",
    empaddress:{
        empcity:"hyd",
        emparea:"gachibowli"
        
}
},{
    empid:2,
    empname:"guna",
    empcompany:"microsoft",
    empsalary:"150000",
    empaddress:{
        empcity:"hyd",
        emparea:"kondapur"
        
}
}
]
array1.map((user)=>{
    store.innerHTML+=`
   <tr>
  <td>${user.empid} </td>
   <td>${user.empname} </td>
    <td>${user.empcompany} </td>
    <td>${user.empsalary} </td>
    <td>${user.empaddress.empcity} </td>
    <td>${user.empaddress.emparea} </td>
    </tr>`
})