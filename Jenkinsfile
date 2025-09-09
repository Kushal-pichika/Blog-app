pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Kushal-pichika/Blog-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy Locally') {
            steps {
                // Kill existing "serve" if running
                bat 'pkill -f "serve -s build" || true'

                // Start serving build on port 3000
                bat 'nohup serve -s build -l 3000 > frontend.log 2>&1 &'
            }
        }
    }
}
