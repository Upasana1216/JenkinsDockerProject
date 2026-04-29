pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "upasanasingh123/jenkinsDockerApp"
    }

    stages {
        stage('Build') {
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