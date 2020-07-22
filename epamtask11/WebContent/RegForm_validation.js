function formValidation()
{
var userid = document.registration.userid;
var password = document.registration.passid;
var username = document.registration.username;
var useradd = document.registration.address;
var usercountry = document.registration.country;
var userzipcode = document.registration.zip;
var useremail = document.registration.email;
var usermale = document.registration.msex;
var userfemale = document.registration.fsex; 
if(userid_validation(userid,6,12))
{
if(password_validation(password,6,10))
{
if(completeLetters(username))
{
if(alpha_numeric(useradd))
{ 
if(countryselection(usercountry))
{
if(allnumeric(userzipcode))
{
if(ValidateEmail(useremail))
{
if(validGender(usermale,userfemale))
{
}
} 
}
} 
}
}
}
}
return false;
}


function userid_validation(userid,min,max)
{
var userid_length=userid.value.length;
if (userid_length==0||userid_length>=max||userid_length<min)
{
alert("User Id should not be empty / length must be between "+min+" to "+max);
userid.focus();
return false;
}
return true;
}


function password_validation(password,min,max)
{
var password_length = password.value.length;
if (password_length==0||password_length >= max||password_length < min)
{
alert("Password should not be empty / length be between "+min+" to "+max);
password.focus();
return false;
}
return true;
}


function completeLetters(username)
{ 
var letters_in_username = /^[0-9A-Za-z]+$/;
if(username.value.match(letters_in_username))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
username.focus();
return false;
}
}


function alpha_numeric(useradd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(useradd.value.match(letters))
{
return true;
}
else
{
alert('User address must consits of alphanumeric characters only');
useradd.focus();
return false;
}
}


function countryselection(usercountry)
{
if(usercountry.value == "Default")
{
alert('Select your country from the list');
usercountry.focus();
return false;
}
else
{
return true;
}
}


function allnumeric(userzipcode)
{ 
var nums = /^[0-9]+$/;
if(userzipcode.value.match(nums))
{
return true;
}
else
{
alert('ZIP code must consist of numeric characters only');
userzipcode.focus();
return false;
}
}


function ValidateEmail(useremail)
{
var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(useremail.value.match(email))
{
return true;
}
else
{
alert("Please enter a valid email address only!");
useremail.focus();
return false;
}
}
function validateGender(usermale,userfemale)
{
y=0;
if(usermale.checked) 
{
y++;
}
if(userfemale.checked)
{
y++; 
}
if(y==1)
{
	alert('Form Succesfully Submitted');
	window.location.reload()
	return true;
}
else
{
	alert('Select Male/Female');
	usermale.focus();
	return false;

}
}