

let name_field = document.getElementById("name");
let mail_field = document.getElementById("mail");
let msg_field = document.getElementById("msg");
let send_button = document.getElementById("Envoyer");

send_button.addEventListener("click", click_envoyer);

function click_envoyer () {

let value_name_field=name_field.value;
let value_mail_field=mail_field.value;
let value_msg_field=msg_field.value;

console.log("Debut");
console.log(value_name_field);
console.log(value_mail_field);
console.log(value_msg_field);
console.log("end");
}
