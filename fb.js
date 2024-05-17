var fname=document.querySelector('.Name').value;


var date=document.querySelector('.Date').value;
var price=document.querySelector('.price');
var arr=document.querySelector(".arrival").value;
var dep=document.querySelector(".depa").value;
var booking=document.querySelector('.booking');


var flights=document.querySelector(".flights")


booking.addEventListener("click",function(e){
    e.preventDefault();

    if (arr=="CHENNAI" && dep=="MUMBAI") {
        document.querySelector('.price').value=3000;
        fly.style.display="block";
    } 
    else if (arr=="CHENNAI" && dep=="DELHI") {
        document.querySelector('.price').value=4000;fly.style.display="block";
    } 
    else if (arr=="CHENNAI" && dep=="KOLKATA") {
        document.querySelector('.price').value=3400;fly.style.display="block";
    
    }
    else if (arr=="CHENNAI" && dep=="PUNE") {
        document.querySelector('.price').value=5200;fly.style.display="block";
    
    }
    else if (arr=="MUMBAI" && dep=="KOLKATA") {
        document.querySelector('.price').value=4300;fly.style.display="block";
    
    }
    else if (arr=="MUMBAI" && dep=="DELHI") {
        document.querySelector('.price').value=4100;fly.style.display="block";
    
    }
    else if (arr=="MUMBAI" && dep=="CHENNAI") {
        document.querySelector('.price').value=2000;fly.style.display="block";
    
    }
    else if (arr=="MUMBAI" && dep=="PUNE") {
        document.querySelector('.price').value=5200;fly.style.display="block";
    
    }
    else if (arr=="DELHI" && dep=="KOLKATA") {
        document.querySelector('.price').value=3000;fly.style.display="block";
    
    }
    else if (arr=="DELHI" && dep=="PUNE") {
        document.querySelector('.price').value=2000;fly.style.display="block";
    
    }
    else if (arr=="DELHI" && dep=="CHENNAI") {
        document.querySelector('.price').value=5300;fly.style.display="block";
    
    }
    else if (arr=="DELHI" && dep=="MUMBAI") {
        document.querySelector('.price').value=4000;fly.style.display="block";
    
    }
    else if (arr=="KOLKATA" && dep=="DELHI") {
        document.querySelector('.price').value=3300;fly.style.display="block";
    
    }
    else if (arr=="KOLKATA" && dep=="CHENNAI") {
        document.querySelector('.price').value=3000;fly.style.display="block";
    
    }
    else if (arr=="KOLKATA" && dep=="PUNE") {
        document.querySelector('.price').value=5000;fly.style.display="block";
    
    }
    else if (arr=="KOLKATA" && dep=="MUMBAI") {
        document.querySelector('.price').value=4200;fly.style.display="block";
    
    }
    else if (arr=="PUNE" && dep=="KOLKATA") {
        document.querySelector('.price').value=4500;fly.style.display="block";
    
    }
    else if (arr=="PUNE" && dep=="CHENNAI") {
        document.querySelector('.price').value=3000;fly.style.display="block";
    
    }
    else if (arr=="PUNE" && dep=="DELHI") {
        document.querySelector('.price').value=3300;fly.style.display="block";
    
    }
    else if (arr=="PUNE" && dep=="MUMBAI") {
        document.querySelector('.price').value=2500;fly.style.display="block";
    
    }
    else{
        document.querySelector('.price').value=0;
    
    }
// --------------------------------------------
 

// --------------------------------------------

var i=document.querySelector('.iprice').value=800;
var s=document.querySelector('.sprice').value=1400;
var a=document.querySelector('.aprice').value=500;

var t=document.querySelector('.tprice').value=700;
var aa=document.querySelector('.aaprice').value=800;
var sj=document.querySelector('.sjprice').value=900;



toti=i+ parseInt(document.querySelector('.price').value);

tots=s+parseInt (document.querySelector('.price').value);

tota=a+parseInt (document.querySelector('.price').value);

tott=t+parseInt (document.querySelector('.price').value);
totaa=aa+parseInt (document.querySelector('.price').value);
totsj=sj+parseInt (document.querySelector('.price').value);






document.querySelector(".iprice").value=toti;
document.querySelector(".sprice").value=tots;
document.querySelector(".aprice").value=tota;
document.querySelector(".tprice").value=tott;
document.querySelector(".aaprice").value=totaa;
document.querySelector(".sjprice").value=totsj;





})

var fly=document.querySelector(".fly")

fly.addEventListener("click",function(e){
e.preventDefault();

    flights.style.display="block";
})


// ------------select FIight fly---------------------






var payment=document.querySelector(".payment")


var bname=document.querySelector(".bname");
var bdate=document.querySelector(".bdate");
var barr=document.querySelector(".barr");
var bdep=document.querySelector(".bdep");
var btot=document.querySelector(".btot");
var bpay=document.querySelector(".bpay");




var ticfly=document.querySelector(".ticfly");
var ticname=document.querySelector(".ticname");
var ticdate=document.querySelector(".ticdate");
var ticseat=document.querySelector(".ticseat");
var ticarr=document.querySelector(".ticarr");
var ticdep=document.querySelector(".ticdep");
var ticgate=document.querySelector(".ticgate");


var image=document.querySelector(".ticimg");


var seat=Math.floor(Math.random()*80);

var gate=Math.floor(Math.random()*15);


function indi(e){

    image.setAttribute("src","./img/indigo logo.png");

bname.innerHTML=fname;
bdate.innerHTML=date;
barr.innerHTML=arr;
bdep.innerHTML=dep;
btot.innerHTML=toti;

payment.style.display="block";

ticfly.innerHTML=" Welcome To---INDIGO AIRWAYS"

ticname.value=fname;
ticdate.value=date;
ticarr.value=arr;
ticdep.value=dep;

ticseat.value=seat;
ticgate.value=gate;

}

function scoot(e){
    image.setAttribute("src","./img/scoot-logo-tail.jpg");

    bname.innerHTML=fname;
bdate.innerHTML=date;
barr.innerHTML=arr;
bdep.innerHTML=dep;
btot.innerHTML=tots;

payment.style.display="block";

ticfly.innerHTML=" Welcome To---SCOOT AIRWAYS"

ticname.value=fname;
ticdate.value=date;
ticarr.value=arr;
ticdep.value=dep;

ticseat.value=seat;
ticgate.value=gate;

}

function airindia(e){
   
    image.setAttribute("src","./img/airindia.png");

    bname.innerHTML=fname;
bdate.innerHTML=date;
barr.innerHTML=arr;
bdep.innerHTML=dep;
btot.innerHTML=tota;

payment.style.display="block";

ticfly.innerHTML=" Welcome To---AIRINDIA EXPRESS AIRWAYS"

ticname.value=fname;
ticdate.value=date;
ticarr.value=arr;
ticdep.value=dep;

ticseat.value=seat;
ticgate.value=gate;

}

function tiger(e){
   
    image.setAttribute("src","./img/tiger.png");

    bname.innerHTML=fname;
bdate.innerHTML=date;
barr.innerHTML=arr;
bdep.innerHTML=dep;
btot.innerHTML=tott;

payment.style.display="block";

ticfly.innerHTML=" Welcome To---TIGER AIRWAYS"

ticname.value=fname;
ticdate.value=date;
ticarr.value=arr;
ticdep.value=dep;

ticseat.value=seat;
ticgate.value=gate;

}

function airasia(e){
   
    image.setAttribute("src","./img/aa.webp");

    bname.innerHTML=fname;
bdate.innerHTML=date;
barr.innerHTML=arr;
bdep.innerHTML=dep;
btot.innerHTML=totaa;

payment.style.display="block";

ticfly.innerHTML=" Welcome To---AIRASIA AIRWAYS"

ticname.value=fname;
ticdate.value=date;
ticarr.value=arr;
ticdep.value=dep;

ticseat.value=seat;
ticgate.value=gate;

}

function spicejet(e){
   
    image.setAttribute("src","./img/sj.png");

    bname.innerHTML=fname;
bdate.innerHTML=date;
barr.innerHTML=arr;
bdep.innerHTML=dep;
btot.innerHTML=totsj;

payment.style.display="block";

ticfly.innerHTML=" Welcome To---SPICEJET AIRWAYS"

ticname.value=fname;
ticdate.value=date;
ticarr.value=arr;
ticdep.value=dep;

ticseat.value=seat;
ticgate.value=gate;



// -------------ticket bill----------



}

var tic=document.querySelector(".tic")

function gettic(){

    tic.style.display="block";

}


function up(){

   window.scrollTo(0,0);
}







