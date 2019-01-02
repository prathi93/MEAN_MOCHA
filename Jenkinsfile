pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build is sucessfull'
        bat 'cd C:\\ProgramFiles (x86)\\Jenkins\\workspace\\basic\\controller\\'
        bat 'node template.js'
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