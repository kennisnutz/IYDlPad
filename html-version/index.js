
const sideMenu= document.querySelector("aside");
const menuBtn= document.querySelector("#menu-btn");
const closeBtn= document.querySelector("#close-btn");
const themeToggler=  document.querySelector(".theme-toggler");



//show sidebar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display= 'block';
})


//close sidebar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display= 'none';
})


//change-theme
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-varables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


Transactions.forEach(transaction => {
    const tr= document.createElement('tr');
    const trContent= `
    <td><a href="">${transaction.transaction_id}</a></td>
    <td class="${transaction.transaction_method=== "Mint"? 
        'danger':transaction.transaction_method=== "Trsnsfer"? 
        'warning': 'primary' }">
        ${transaction.transaction_method}
    </td>
    <td class="primary">${transaction.time}</td>
    <td>${transaction.from}</td>
    <td>${transaction.to}</td>
    <td>${transaction.token_id}</td>
    `;
tr.innerHTML= trContent;
document.querySelector('table tbody').appendChild(tr);   
      
          
       
       
});