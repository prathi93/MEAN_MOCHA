pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build is sucessfull'
      }
    }
    stage('UnitTest') {
      steps {
        bat(script: 'npm test', encoding: 'testing ', returnStatus: true)
      }
    }
  }
}