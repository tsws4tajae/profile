// get users data
function getUserData(form) {
	// if any form field isn't filled dont go on
	if(!form.userfname.value || !form.userlname.value || !form.usergender.value || !form.userEmail.value || !form.userPhone.value || !form.favColor.value || !form.userBirth.value) {
		alert('missing data')
		return
	}
	// store all form data in an object, selecting by elements
	var userProfile = {
		firstname : form.userfname.value,
		lastname  : form.userlname.value,
		gender    : form.usergender.value,
		email     : form.userEmail.value,
		phone     : form.userPhone.value,
		color     : form.favColor.value,
		birthplace: form.userBirth.value
	}
	// call displayProfile function and pass through userProfile object 
	displayProfile(userProfile)
}

// display profile information
function displayProfile(userProfile) {
	// make sure the user data is being passed through
	console.log(userProfile)

	// select some HTML elements by id
	var userName       = document.getElementById('userName'),
	    userGender     = document.getElementById('userGender'),
		userEmail      = document.getElementById('userEmail'),
		userPhone      = document.getElementById('userPhone'),
		userColor      = document.getElementById('userColor'),
		userBirthplace = document.getElementById('userBirthplace')

	// change the text of these variables using the userProfile object
	userName.innerText       = "Welcome " + userProfile.firstname + " " + userProfile.lastname 
	userGender.innerText     = "Gender: " + userProfile.gender
	userEmail.innerText      = "Email: " + userProfile.email
	userPhone.innerText      = "Phone: " + userProfile.phone
	userColor.innerText      = "Favorite Color: " + userProfile.color
	userBirthplace.innerText = "Birth Continent: " + userProfile.birthplace

	// hide new profile form
	document.getElementById('newProfile').style.display = "none"
	// display updated profile data
	document.getElementById('updatedProfile').style.display = "block"
}
 
// add click function to button
document.getElementById('sendDataButton').addEventListener('click', function() {
	// pass newprofile form through getUserData function
	getUserData(document.newprofile1)
}, false)


