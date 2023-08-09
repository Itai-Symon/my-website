#Itai's webpage
how to run?
double-click on index.html

input validation:
using the required attribute on the name field, I make sure that any character is written, so that without writting a name you can't submit.
using the required attribute on the email field, I make sure that at least one character is written before a '@' and a String containing a '.' withing the String and not in the edges.

purpose of the JS:
Firstly, adds the functionality of folding and opening the navbar using the click event (by toggling the class "visible" on the "navbar_icons" element and toggle the class "folded" on the "menuIcon" element. The toggle method is used to 'switch' between adding and removing a specific class from an element).

Secondly, adds the functionality of the emailjs library to send an email using the details provided in the input fields. The function retrieves the input values, assigns them to variables, and then sends the email using the emailjs.send function.