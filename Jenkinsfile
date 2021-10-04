pipeline {
    agent any
    
    tools { nodejs "node16" }

    stages {
        stage('Setup') {
            steps {
                echo 'Cloning the repo...'
			    			git 'https://github.com/AyanGhatak/learn-jenkins-nodejs.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Installing the dependencies...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Validating the test...'
                sh './script/test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the changes on stag'
                sh './script/deploy'
            }
        }
    }
}
