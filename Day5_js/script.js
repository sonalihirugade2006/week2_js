
function fakeApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("API call failed!");
            }
        }, 2000);
    });
}


async function getData() {
    try {
        console.log("Loading...");

        const result = await fakeApiCall();

        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();