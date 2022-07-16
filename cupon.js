const cupon = document.querySelector('#cupon')
const copy = document.querySelector('#copy')


copy.onclick = () =>{
    navigator.clipboard.writeText(cupon.innerHTML)
    copy.innerHTML = "Copied"
    setTimeout(()=>{
        copy.textContent = "copy again"
    },3000)
}