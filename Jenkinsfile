pipeline {
    agent any
    stages {
        stage ('build') {
            steps {
                sh 'printenv'
                sh 'docker build -t appsleal/integraciondemo:""$BUILD_ID"" .'
            }
        }

        stage ('Publish') {
            steps {
                sh 'docker push appsleal/integraciondemo:""$BUILD_ID"" '
            }
        }
    }
}