pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your Git repository
                git branch: 'main', url: 'https://github.com/vigneshshiv28/Devops-test-project.git'
            }
        }
        
        stage('Build') {
            steps {
                // Build your Flask backend
                sh 'docker build -t server-app .'
                
                // Build your React frontend
                sh 'docker build -t react-app .'
            }
        }
        
         stage('Test') {
            steps {
                // Change directory to the server directory
                dir('backend') {
                    // Run tests for Node backend
                    sh 'docker run --rm webdriver-test'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
