# Angular-project
Angular2.0 Sample project


How to use
----------
Beforer running npm install to add all the dependencies, you need to add firebase from npm base.
i.e execute command - $ npm install --save firebase 
Without firebase dependency our App will not run as it is require for Authentication process. Serves as database for us.

Then, 
Run "npm install" inside this project folder to install all dependencies.(node_module folder)
Make sure you use the latest version of the CLI (upgrade guide below)
Run "ng serve" to see the app in action. 
- wait for 30sec to compile it successfully. you can view the project in your browser as localhost:4200

How to upgrade the CLI
-----------------------

Run the below commands - only use "sudo" on Mac/ Linux.

sudo npm uninstall -g angular-cli @angular/cli
npm cache clean
sudo npm install -g @angular/cli
