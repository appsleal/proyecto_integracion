pipeline {
    agent any
    environment {     
        DOCKERHUB_CREDENTIALS= credentials('docker-hub')     
    }  
    stages {
        stage ('build') {
            steps {
                sh 'printenv'
                sh 'docker-compose build -t appsleal/pruebas:$BUILD_NUMBER .'
                echo 'Docker-compose-build Build Image Completed' 
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
                sh 'printenv'
                sh 'docker push appsleal/pruebas:$BUILD_NUMBER'
            }
        }
    }
    post{
        always {  
            sh 'docker logout'           
        }      
    }  
}