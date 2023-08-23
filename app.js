const productList=document.getElementById('productList')

fetch('https://fakestoreapi.com/products')

.then( (Response)=>{
    return Response.json()
})

.then(data =>{
    console.log(data)

    for(let i=0;i<data.length;i++){

        const li=document.createElement('li')
        
    
        li.classList.add("product")
        
        
        
    // create img element
        const img=document.createElement('img')
        // add src to img from data
        img.src=data[i].image
        // adding img to li
        li.appendChild(img)
        
        
        
        
    //create h3
    
        const h3=document.createElement('h3')
        h3.innerHTML=data[i].title
        li.appendChild(h3)
    
    //create span
    
    const span=document.createElement('span')
    span.innerHTML='₹' + data[i].price
    li.appendChild(span)
    
    console.log(li)
    
    productList.append(li)  
    
    
    }
})


.catch(error =>{
    console.log(error)
})