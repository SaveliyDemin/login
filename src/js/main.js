let nameI = document.querySelector(".nameI");
let passI = document.querySelector(".passI");
let btn = document.querySelector(".btn");
let nameI1 = document.querySelector(".nameI1");
let passI1 = document.querySelector(".passI1");
let btn1 = document.querySelector(".btn1");
let reg = document.querySelector(".regestration");
let login = document.querySelector(".login");
let myname = nameI.value;
let mypass = passI.value;

btn.addEventListener('click', function (event){
    myname = nameI.value;
    mypass = passI.value;
    event.preventDefault();
    nameI.value = "";
    passI.value = "";
    alert("Успешная регистрация, ВАС ВЗЛОМАЛИ ХАКЕРЫ");
    
    reg.style = "display: none;";
    login.style = "display: block;";
});
btn1.addEventListener('click', function (event1){
    event1.preventDefault();
    if (nameI1.value == myname && passI1.value == mypass )  {
        alert("Вы успешно зашли");
    }
    else
        alert("Попробуйте снова");

    nameI1.value = "";
    passI1.value = "";
    
    
});



