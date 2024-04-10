const { remote } = require('webdriverio');

(async () => {
    // Initialize WebDriverIO
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    });

    try {
        // Open the API endpoint URL
        await browser.url('http://localhost:5000/api/details');

        // Wait for the response to be received (you may adjust this timing)
        await browser.pause(2000);

        // Extract the response body
        const responseBody = await browser.$('pre').getText();

        // Parse the JSON response
        const responseJson = JSON.parse(responseBody);

        // Verify the response
        const expectedName = 'Vignesh Shivhare';
        if (responseJson.name === expectedName) {
            console.log(`Test Passed: Received name '${expectedName}' matches expected name '${expectedName}'`);
        } else {
            console.log(`Test Failed: Received name '${responseJson.name}' does not match expected name '${expectedName}'`);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the browser
        await browser.deleteSession();
    }
})();
