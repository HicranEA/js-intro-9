class Actions {
static visitUrl(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(url.toLowerCase().startsWith('www') || url.toLowerCase().startsWith('https://')) {
                resolve("URL visited successfully");
        }
            else reject("Wrong URL");
        }, 1000);
    });
}

static login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === "TechGlobal" && password === "Test1234") {
                resolve("Logged in successfully");
        }
            else reject("Wrong Credentials");
        }, 3000);
    });
}

static validateTitle(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(title.trim() !== "" && title !== null && title !== undefined) {
                resolve("Title validated successfully");
        }
            else reject("Wrong Title");
        }, 500);
    });
}
}

module.exports.Actions = Actions;