pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build is sucessfull'
        bat 'node C:\\Users\\ps268\\OneDrive - DXC Production\\Prashanth\\Projects\\basic-master\\controller\\template.js'
      }
    }
    stage('UnitTest') {
      steps {
        bat(script: 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\basic  npm test', encoding: 'testing ')
      }
    }
  }
}