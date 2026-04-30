pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "upasanasingh123/jenkinsdockerapp"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
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
}