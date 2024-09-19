function info(){
    let name = prompt("Enter your name");
    let age = prompt("Enter your age");
  if(age>=18){
    document.getElementById('para').innerHTML = `Welcome ${name}! You are eligible to participate`
 }
 else{
    document.getElementById('para').innerHTML = `Sorry ${name}! You are not eligible to participate`
 }
}