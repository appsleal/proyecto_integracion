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
        stage ('build') {
            steps {
                sh 'printenv'
                sh 'docker-compose run'
                echo 'Docker-compose Run Run Image Completed' 
            }
        }
        stage('look images') {         
            steps{                            
	            sh 'docker images'
                sh 'docker tag e44d118693ce appsleal/proyecto_integracion_api:$BUILD_NUMBER'                
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
                sh 'docker push appsleal/proyecto_integracion_api:$BUILD_NUMBER'
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