pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = "frontend-app"
        BACKEND_IMAGE  = "backend-app"
        TAG = "latest"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo.git'
            }
        }

        // ================= FRONTEND =================
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        // ================= BACKEND =================
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        // ================= DOCKER BUILD =================
        stage('Build Docker Images') {
            steps {
                script {
                    docker.build("${FRONTEND_IMAGE}:${TAG}", "./frontend")
                    docker.build("${BACKEND_IMAGE}:${TAG}", "./backend")
                }
            }
        }

        // ================= RUN CONTAINERS =================
        stage('Deploy') {
            steps {
                sh '''
                docker stop frontend || true
                docker rm frontend || true
                docker stop backend || true
                docker rm backend || true

                docker run -d -p 3000:3000 --name frontend frontend-app:latest
                docker run -d -p 5000:5000 --name backend backend-app:latest
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}
