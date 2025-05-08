document.addEventListener("DOMContentLoaded", function() {
    
    // Change image when hovering
    let img1 = document.getElementById("img1");

    img1.addEventListener("mouseover", function(){
        img1.src = "img/img3.jpg";
    })

    img1.addEventListener("mouseout", function(){
        img1.src = "img/img1.jpg";
    });

    // Show date
    const dateP = document.getElementById("date");
    let date = new Date();
    let day = date.getDay()-1;
    let month = date.getMonth();
    let year = date.getFullYear();
    let dayMonth = date.getDate();

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(dayMonth);

    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
 
    dateP.innerText = days[day] + ", " + dayMonth + " de " + months[month] + " de " + year;




})