pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    environment {
        DOCKER_IMAGE = "upasanasingh123/jenkinsdockerapp"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build the project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build docker image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-creds'){
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }

                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed' 
        }
        success {
            echo 'We are testing WebHooks'
        }
        failure {
            echo 'Pipeline failed Oopss'
        }
    }
}