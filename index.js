//test emails to utilize regex expression
const email = ["test123@example.com", "user@email.net", "john.doe@gmail.com", "info@company.org", "webmaster@website.co", "support@helpdesk.info", "user1234@my-domain.tv"];

//setup the Regex to validate the email 
const regex = new RegExp(/\b[a-z0-9#$_-]+@[a-z0-9]+\.[a-z]{2,3}\b/, 'i')

//Check your content, verify console results
email.forEach(email => console.log(email, regex.test(email)));