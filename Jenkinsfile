pipeline {
    agent any
    environment {     
        DOCKERHUB_CREDENTIALS= credentials('docker-hub')     
    }  
    stages {
        stage ('build') {
            steps {
                sh 'printenv'
                sh 'docker-compose build'
                echo 'Docker-compose-build Build Image Completed' 
            }
        }
        stage('look images') {         
            steps{                            
	            sh 'docker images'                 
	            echo 'look complete'
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
                sh 'docker push proyecto_integracion_api:$BUILD_NUMBER'
                echo 'Push Image Completed'
                
            }
        }
    }
    post{
        always {  
            sh 'docker logout'           
        }      
    }  
}