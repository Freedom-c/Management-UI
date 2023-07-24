console.log("hi");

document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("form");
    form.addEventListener("submit",function(event){
        event.preventDefault(); //sayfanın yeniden yüklenmesini önler

        //formdaki değerleri alalım

        const username=document.getElementById("name").value;
        const displayName = document.getElementById("display").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const userRoles = document.getElementById("user-roles").value;
        const enabled = document.getElementById("enabled").checked;

        const tableRow = document.createElement("tr");

        // Tablo hücrelerini oluştur ve değerleri ata
        const usernameCell = document.createElement("td");
        usernameCell.textContent = username;

        const displayNameCell = document.createElement("td");
        displayNameCell.textContent = displayName;

        const emailCell = document.createElement("td");
        emailCell.textContent = email;

        const enabledCell = document.createElement("td");
        enabledCell.textContent = enabled ? "Enabled" : "Disabled";

        // Hücreleri satıra ekleyelim
        tableRow.appendChild(usernameCell);
        tableRow.appendChild(displayNameCell);
        tableRow.appendChild(emailCell);
        tableRow.appendChild(enabledCell);

        // Tabloya satırı ekle
        document.getElementById("user-table").appendChild(tableRow);

        // Formu sıfırla
        form.reset();
    })
})