pipeline {
    agent any
    environment {     
        DOCKERHUB_CREDENTIALS= credentials('docker-hub')     
        registryCredential = 'docker-hub'
        imagename = "appsleal/pruebas"

    }  
    stages {
        stage ('build') {
            steps{
                script {
                    dockerImage = docker.build imagename
                }
            }
        }
        stage('Login to Docker Hub') {         
            steps{                            
	            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'                 
	            echo 'Login Completed'
            }           
        }    
        stage ('Publish') {
            steps {
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push("$BUILD_NUMBER")
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
    post{
        always {  
            sh 'docker logout'           
        }      
    }  
}