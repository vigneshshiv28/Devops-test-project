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
                sh 'docker build -t flask-app .'
                
                // Build your React frontend
                sh 'docker build -t react-app frontend'
            }
        }
        
        stage('Test') {
            steps {
                // Change directory to the server directory
                dir('server') {
                    // Run tests for Flask backend
                    sh 'docker run --rm flask-app python selenium-test.py'
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
