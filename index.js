

function Result(){
    var Starttwo=(document.getElementById('Start').value);
    var Endtwo=(document.getElementById('End').value);
    var Requriedtwo = (document.getElementById('Requried').value);
    var headtwotwo=(document.getElementById('head22'));
     
     if(Starttwo<Endtwo){
        headtwotwo.innerHTML=" "
    for(let i=Starttwo;i<=Endtwo;i++){
        
        headtwotwo.innerHTML+=`${Requriedtwo} x ${i} = ${Requriedtwo*i} <br>`
    }
}
}
    //  function daynamic table end
    // function daynamic chart start
    let num=0;
let doc= document.getElementById('heading');
function addone(){
    num++;
   doc.innerHTML= num
}
function previous(){
    num--;
    doc.innerHTML=num
}
function Reset(){
    num= 0;
    doc.innerHTML=num 
}

let tab=2;
function table2(){
    document.getElementById('head3') .innerHTML=""
    for(let cou=1;cou<11;cou++){
        document.getElementById('head3').innerHTML+= tab+'x'+ cou+'='+tab*cou+ "<br>"
    }
}

function daynamic(isdp){
document.getElementById('head2') .innerHTML=""
for(let cou=1;cou<11;cou++){
    document.getElementById('head2').innerHTML+= isdp+'x'+ cou+'='+isdp*cou+ "<br>"
}
}
function daynamicprevious(isdp2){
    document.getElementById('head2') .innerHTML=""
    for(let cou=1;cou<11;cou++){
        document.getElementById('head2').innerHTML+=isdp2+'x'+ cou+'='+isdp2*cou+ "<br>"
    }
}
// function onchangestart

let dis=(document.getElementById('p'));
function change(){
    dis.innerHTML=" "
    let input= (document.getElementById('onchange').value);
    for(let n=0; n<11;n++) {
dis.innerHTML+=`${input} x ${n} = ${input*n} <br>`
    }
}
function clear(){
    dis.innerHTML=" "
}