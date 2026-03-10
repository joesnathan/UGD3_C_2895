const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("errorMsg");

if(username === "" || password === ""){
    errorMsg.innerText = "Username atau Password tidak boleh kosong!";
    errorMsg.style.fontSize = "13px";
    errorMsg.style.color = "red";
}
else if (password.length < 8 || password.length > 16){ 
    errorMsg.innerText = "Panjang password harus antara 8-16 karakter!";
    errorMsg.style.fontSize = "13px";
    errorMsg.style.color = "red";
}

else {
    window.location.href = "https://instagram.com/jnthn.indra";
}});
