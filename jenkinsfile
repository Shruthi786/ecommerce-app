pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                https://github.com/Shruthi786/ecommerce-app.git
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t myapp .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop myapp || true
                docker rm myapp || true
                docker run -d -p 80:3000 --name myapp myapp
                '''
            }
        }
    }
}
