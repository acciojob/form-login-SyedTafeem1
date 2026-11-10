function getFormvalue() {
    //Write your code here
	const fname = document.getElementById("fname")
	const lname = document.getElementById("lname")

	const fnameVal = fname.value.trim()
	const lnameVal = lname.value.trim()
    alert(`${fnameVal} ${lnameVal}`)
}
