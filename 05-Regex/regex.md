function validateUsername(username) {
    var pattern = /^[a-z0-9_-]{3,16}$/;
    return pattern.test(username);
}

// Test cases
var usernames = ["janedoe_123", "john-smith", "user123", "longusername12345", "short"];
usernames.forEach(function(username) {
    if (validateUsername(username)) {
        console.log(username + " is a valid username.");
    } else {
        console.log(username + " is not a valid username.");
    }
});
