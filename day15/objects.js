let empdetails=[
    {
        empid:1,
        empname:"shankar",
        empcompany:"google",
        empsalary:100000,
        empAddress:{
            empcity:"hyderabad",
            emparea:"kukatpally"
        }

    },
    {
        empid:2,
        empname:"snehith",
        empcompany:"google",
        empsalary:100000,
        empAddress:{
            empcity:"hyderabad",
            emparea:"secunderabad"
        }

    },
    {
        empid:3,
        empname:"sairam",
        empcompany:"google",
        empsalary:100000,
        empAddress:{
            empcity:"hyderabad",
            emparea:"jubleehills"
        }

    },
    {
        empid:4,
        empname:"siddhu",
        empcompany:"google",
        empsalary:100000,
        empAddress:{
            empcity:"hyderabad",
            emparea:"Filmnagar"
        }

    },
    {
        empid:5,
        empname:"prashanth",
        empcompany:"google",
        empsalary:100000,
        empAddress:{
            empcity:"hyderabad",
            emparea:"uppal"
        }

    },
]

empdetails.map(user=>{
    let store=document.getElementById("store");
    // console.log(user);
    store.innerHTML+=`
    <tr>
    <td>${user.empid}</td>
    <td>${user.empname}</td>
    <td>${user.empcompany}</td>
    <td>${user.empsalary}</td>
    <td>${user.empAddress.emparea}</td>
    </tr>`
})
 
