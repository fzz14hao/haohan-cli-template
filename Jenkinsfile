pipeline {
  agent any
    stages {
    stage('show npm info') {
      steps {
        echo 'NPM info'
        powershell 'dir'
        powershell 'npm -version'
        powershell 'node -v'
        powershell 'npx -v'
        powershell 'yarn -v'
      }
    }

    stage('report') {
      steps {
        echo 'reportui'
      }
    }

    stage('install') {
      steps {
        echo 'npm install start'
        bat 'cd ./erp/report & yarn'
      }
    }

    stage('build') {
      steps {
        echo 'npm build start'
        bat 'cd ./erp/report & npm run build:micro'
      }
    }


    stage('backup') {
      steps {
        echo 'backup start'
        bat 'D: & cd D:/websites/erp/gateway/wwwroot & echo d | xcopy "./reportui" "./backup/reportui/%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%" /s/y'
        bat 'D: & cd D:/websites/erp/gateway/wwwroot/reportui & echo Y | del *'
      }
    }

    stage('copy') {
      steps {
        echo 'copy file start'
        bat 'xcopy "./erp/report/dist" "D:/websites/erp/gateway/wwwroot/reportui" /s/y'
      }
    }
    }
}
