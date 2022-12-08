pipeline {
    agent any
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
            withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'HUB_USER', passwordVariable: 'HUB_TOKEN')]) {                      
                    sh '''
                        docker login -u $HUB_USER -p $HUB_TOKEN 
                        docker image tag pi:bday7 $HUB_USER/pi:bday7
                        docker image push $HUB_USER/pi:bday7
                    '''
                }
            }
    }
    post{
        always {  
            sh 'docker logout'           
        }      
    }  
}