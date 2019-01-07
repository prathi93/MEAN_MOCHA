pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\basic\\database'
        bat 'node database/dataFile.js'
        bat 'node routes/api.js'
        bat 'node routes/config.js'
        echo 'Build is sucessfull'
      }
    }
    stage('UnitTest') {
      steps {
        bat 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\basic'
        bat 'npm install --save mocha'
        bat 'npm test'
        echo 'All unit test are passed succesfully'
      }
    }
    stage('EsLint Checks') {
      steps {
        bat 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\basic'
        bat 'npm install --save eslint '
        bat 'npm run eslint'
        echo 'Lint checks done'
      }
    }
  }
}