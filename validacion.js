const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailhelp = document.querySelector("#emailhelp")
const password = document.querySelector("#password")
const passwordHelp = document.querySelector("#passwordHelp")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (email.value === "" || password.value === "") {
  	if (email.value === "") {
  	 emailHelp.innerText = "Por favor, complete la información"
  	}
	if (password.value === "") {
	 passwordHelp.innerText = "Por favor, complete la información"
}
  } else {
  	form.submit();
  }

})