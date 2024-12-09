// let x =[1,40,2,400,3];
// const sortnumber=x.sort(function(a,b){return a-b})
// console.log(sortnumber);


// // function objectmaker 
// function objectmaker(){
//   this.name="MERN 2403";
//   this.totalstudent=24
//   this.isactive-true
// }
// console.log(new objectmaker());


// function objectmaker(name,sam,isa){
//   this.name= name;
//   this.totalstudent=sam
//   this.isactive=isa
// }
// console.log(new objectmaker("Mern 2403",24,true));
// console.log(new objectmaker("Mern 2404",14,true));
// console.log(new objectmaker("Mern 2306",25,true));



class Mern{
    name="MERN 2403"
    totalstudent=24
    isactive=true
    gretting=function(){
      alert("hi")
    }
  }
  
  const mycreatingobj=new Mern();
  console.log(mycreatingobj);