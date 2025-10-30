const mSection=document.querySelector("#m");
const tSection=document.querySelector("#t");
const antegral=document.querySelector("#antegral");
const moshtagh=document.querySelector("#moshtagh");
const had=document.querySelector("#had");
const mx=document.querySelector(".mx");
const my=document.querySelector(".my");
const mn=document.querySelector(".mn");
const ma=document.querySelector(".ma");
const mbtn=document.querySelector(".mbtn");
const limit=document.querySelector(".limit");
const icons=document.querySelectorAll(".icon");

const aa=document.querySelector(".aa");
const bb=document.querySelector(".bb");
const cc=document.querySelector(".cc");
const dd=document.querySelector(".dd");
const ee=document.querySelector(".ee");

let oneFlag="m";
let twoFlag="antegral";
let lastfocus=mx;




const fetchData=async(test,limit)=>{
    let response="";
    if(twoFlag=="antegral"){
        response = await fetch(`/wolfram?input=integrate+${test}`) 
        const data= await response.json()
        const value=data.queryresult.pods[0].subpods[0].plaintext;
        my.innerHTML=value
        
    }else if(twoFlag=="moshtagh"){
         response = await fetch(`/wolfram?input=derivative+of+${test}`) 
         const data= await response.json()
         const value=data.queryresult.pods[0].subpods[0].plaintext;
         my.innerHTML=value;
        
    }else{
         response = await fetch(`/wolfram?input=limit+${test}+x->${limit}`) 
         const data= await response.json()
         const value=data.queryresult.pods[0].subpods[0].plaintext;
         my.innerHTML=value
         
    }
    

    
    
}








const headerHandler=()=>{
    if(oneFlag=="m")
    {
        mSection.classList.add("opacity");
        tSection.classList.remove("opacity");
    }else{
        {
        tSection.classList.add("opacity");
        mSection.classList.remove("opacity");
    }
    }
}
const navHandler=()=>{
    const mf=document.querySelectorAll(".mf");
    mf.forEach((x)=>{
        if(x.getAttribute("id")==twoFlag)
            x.classList.add("opacity")
        else
            x.classList.remove("opacity")
    })
    if(twoFlag=="had")
        limit.classList.remove("hidden");
    else
        limit.classList.add("hidden");
}


navHandler()
headerHandler();
mSection.addEventListener("click",()=>{
    oneFlag="m";
    headerHandler();
})
tSection.addEventListener("click",()=>{
    oneFlag="t";
    headerHandler();
})
antegral.addEventListener("click",()=>{twoFlag="antegral";navHandler()});
moshtagh.addEventListener("click",()=>{twoFlag="moshtagh";navHandler()});
had.addEventListener("click",()=>{twoFlag="had";navHandler()});
mbtn.addEventListener("click",()=>{
    fetchData(mx.value,limit.value)
})

icons.forEach((i)=>{
    i.addEventListener("click",()=>{
        
        lastfocus.value=lastfocus.value.slice(0,lastfocus.selectionStart)+i.dataset.value+lastfocus.value.slice(lastfocus.selectionEnd)
    })
})
mx.addEventListener("click",()=>{lastfocus=mx})

limit.addEventListener("click",()=>{lastfocus=limit})
