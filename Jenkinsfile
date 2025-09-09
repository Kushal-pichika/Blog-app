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
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy Locally') {
            steps {
                // Kill existing "serve" if running
                sh 'pkill -f "serve -s build" || true'

                // Start serving build on port 3000
                sh 'nohup serve -s build -l 3000 > frontend.log 2>&1 &'
            }
        }
    }
}
