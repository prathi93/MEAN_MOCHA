pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build is sucessfull'
        bat 'node C:\\Program Files (x86)\\Jenkins\\workspace\\basic\\controller\\template.js'
      }
    }
    stage('UnitTest') {
      steps {
        bat 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\basic'
        bat 'npm test'
      }
    }
  }
}