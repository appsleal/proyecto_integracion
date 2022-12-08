pipeline {
    agent any
    stages {
        stage ('build') {
            steps {
                sh 'printenv'
                sh 'docker-compose build'
                echo 'Docker-compose-build Build Image Completed' 
            }
        }

        stage ('Publish') {
            steps {
                withDockerRegistry([credentialsId: "docker-hub", url:""]) {
                    sh 'docker push appsleal/integraciondemo:""$BUILD_ID"" '
                }
                
            }
        }
    }
}