let mItem = document.querySelectorAll('.mobile-item')
console.log(mItem);
mItem.forEach(item =>{
    item.addEventListener("click",event =>{
        const mList = item.children[1]
        item.classList.toggle("active")
        if(item.classList.contains("active"))
        {
            mList.style.maxHeight= "700px";
        }
        else{
            mList.style.maxHeight= "0px";
        }
    })
})