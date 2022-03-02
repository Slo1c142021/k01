function oblicz(){
    var a = document.getElementById("a").value;
    a = parseFloat(a);
    var wynik = a*0.95;

    document.getElementById("wynik").innerHTML = wynik.toFixed(2) + " cm";
}
