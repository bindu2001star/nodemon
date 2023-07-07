//console.log('hello from nodejs');
//const fs=require('fs');
//fs.writeFileSync('main1.js','helloworld');
 //const add=(a,b)=> {
  //  return a+b;
//}
//console.log(add(2,3))
//const obj={
//    name:'bindu',
//    age:21,
//    role:'Backend developer',
//    greet() {
//       console.log(this.role);
//    }
//}
////obj.greet();
////destructuring
//const printname=({name})=>{
//  console.log(name);
//
//}
//const {name,age}=obj;
//console.log(name,age);
//printname(obj);
//const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

//const { key1, key3} = { ...obj1}



//console.log(key1, key3)
//const arr1 = ['value1', 'value2']
//
//const [ val1, val2 ] = arr1
//
//
//
//console.log(val1)
//
//console.log(val2)
//const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
//
//let { key1, key3} = {...obj1,key3:123}
//console.log(obj1.key1, obj1.key3)

//
//setTimeout(() => console.log('c'), 3000)
//
//setTimeout(() => console.log('d'), 0)
//
//console.log('a');
//console.log('b');
//const fetchData=()=>{
//  const promie=new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      resolve('d');
//    },0)
//  });
//  return promie;
//}
//setTimeout(()=>{
//  console.log('c');
//  fetchData().then(text=>{
//    console.log(text);
//    return fetchData();
//    
//  })
//  .then(()=>{
//    console.log('e');
//
//  })
//},3000)
//
//
