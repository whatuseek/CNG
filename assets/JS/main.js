// Using innerText (similar to textContent)
// document.getElementById("guest-name").innerText = "Your text here";
// Setting text content
// document.getElementById("guest-name").textContent = "Brother";

const full_name=prompt("Enter your name: ");
const guest_name=document.getElementById("guest-name");

// Checking if input is not empty
if(full_name){
    guest_name.innerText=full_name;
}
else if(full_name==null){
    guest_name.innerText="Anonymous";
}
else{
    guest_name.innerText="Guest";
}