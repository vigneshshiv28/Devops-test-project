from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
import unittest

class FlaskAPITestCase(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.implicitly_wait(10)
        self.wait = WebDriverWait(self.driver, 10)  # Initialize WebDriverWait

    def tearDown(self):
        self.driver.quit()

    def test_flask_api(self):
        # Assuming Flask app is running on localhost:5000
        self.driver.get("http://localhost:5000/api/details")

        # Wait for the <pre> element to be present on the page
        pre_element = self.wait.until(EC.presence_of_element_located((By.TAG_NAME, "pre")))

        # Deserialize the actual response from JSON
        actual_response = json.loads(pre_element.text)

        # Define the expected response as a dictionary
        expected_response = {"name": "Vignesh Shivhare"}

        # Verify that the API response is correct by comparing dictionaries
        self.assertEqual(actual_response, expected_response)

if __name__ == "__main__":
    unittest.main()
