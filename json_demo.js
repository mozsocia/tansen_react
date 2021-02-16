const data = [
  {name: "mozdlif",id: 190221022, subject: "CSE", beton: 1200},
  {name: "tansen",id: 190221028, subject: "CSE", beton: 1400},
  {name: "Sagupta",id: 190221023, subject: "CSE", beton: 1500},

]

var newdata = data.filter((item)=>{  
    return (item.name == 'tansen')  
})


let a = newdata[0]

// console.log(a);

for (const key in a) {
  console.log(key,a[key]);
}







// const newData = data.map((item)=> {
//   item.beton = item.beton-200

//     return item; 
//   })




