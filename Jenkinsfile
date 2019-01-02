pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\basic\\database'
        bat 'node dataFile.js'
        echo 'Build is sucessfull'
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