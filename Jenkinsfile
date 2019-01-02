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
        bat(script: 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\basic  npm test', encoding: 'testing ')
      }
    }
  }
}