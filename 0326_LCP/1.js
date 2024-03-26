"use strict";

let R = null;
let V = 0;
async function loade()
{
    let url = `https://excuser-three.vercel.app/v1/excuse/college/`;

    let r = await fetch(url); //fetch is an async function, await is used here to process fetch here before progressing
    let rj = await r.json(); //async

    R = rj;
    console.log(rj);

    let d3 = document.querySelector("#d3");
    d3.innerHTML = rj[0].excuse;

    let opts =
    {
        title: "Success",
        text: "New excuse loaded!",
        icon:"success",//"error"//"question"
    }

    Swal.fire(opts)

    V = V + 10;
    opts =
    {

        targets: [d3],
        scale: { value: V/100, duration: 3000, }
        //rotate: { value: V, duration: 3000, }
       // translateX: { value: V, duration: 3000, }

    };
    anime(opts);

}


let b3 = document.querySelector("#b3");

b3.addEventListener("click", loade);