let fields = [
    {id: "userName", errId: "errName", msg: "Name is required"},
    {id: "userEmail", errId: "errEmail", msg: "Email is required"},
    {id: "userSub", errId: "errSub", msg: "Subject is required"},
    {id: "message", errId: "errMessage", msg: "Message is required"},
];

let contactForm = document.getElementById("contactForm");
let succMsg = document.getElementById("succMsg");

function validForm(input, errM, msg){
    let isValid = input.value.trim() !== "";
    input.classList.toggle("border-red-600", !isValid);
    input.classList.toggle("border-blue-600", isValid);
    errM.textContent = isValid ? "" : msg;
    return isValid;
}

fields.forEach(f =>{
    let input = document.getElementById(f.id);
    let err = document.getElementById(f.errId);

    let check = () => validForm(input, err, f.msg);

    input.addEventListener("blur", check);
    input.addEventListener("input", check);

    f.check = check;
})

contactForm.addEventListener("submit", e => {
  e.preventDefault();

  const allValid = fields.every(f => f.check());

  if (allValid) {
    succMsg.textContent = "Your message sent successfully!";
    contactForm.reset();

    setTimeout(() => {
      succMsg.textContent = "";
    }, 3000);
  }
});
