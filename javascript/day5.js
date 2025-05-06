function getData(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let notelpon = document.getElementById("notelpon").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  console.log(name, password, notelpon, subject, message);
}
