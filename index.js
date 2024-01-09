var totalSeatSelcted=0;
var TotalAmountPay=0;

function bookSeat(e){
    let a=document.getElementById('totalSeat');
    let b=document.getElementById('GST');
    let c=document.getElementById('totalAmount');
    if(e.innerText=='Select'){
        e.innerText='Selected';
        totalSeatSelcted++;
        e.style.backgroundColor = 'red';
        e.style.color='white';
       

    }
    else{
        e.innerText='Select';
        e.style.backgroundColor = 'lightcyan';
        e.style.color='black';
        totalSeatSelcted--;
       
    }
    a.innerText=totalSeatSelcted;
    b.innerText=(totalSeatSelcted*100) *(0.18);
    c.innerText=((totalSeatSelcted*100)+((totalSeatSelcted*100) *(0.18))); 
}
let reset=document.getElementById('reset');
reset.addEventListener('click',function(){location.reload();});
