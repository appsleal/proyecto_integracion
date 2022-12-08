pipeline {
    agent any
    environment {     
        DOCKERHUB_CREDENTIALS= credentials('docker-hub')     
    }  
    stages {
        stage ('build') {
            steps {
                sh 'printenv'
                sh 'docker-compose -p build'
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
                sh 'docker push appsleal/proyecto_integracion:$BUILD_NUMBER'
            }
        }
    }
    post{
        always {  
            sh 'docker logout'           
        }      
    }  
}