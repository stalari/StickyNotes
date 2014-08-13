Pre-requisites
==============
Git, nodeJs and npm modules
make sure above three installed in your machine using
	node -v
	git --version
	npm -v


Install Yeoman, Grunt and Bower. We’re going to use the Node Package Manager to do this all at once.
In a terminal, run the following:

	sudo npm install -g yo grunt-cli bower

As simple as that, we now have a powerful set of tools at our disposal.


Fork StickyNotes App from https://github.com/stalari/StickyNotes

Clone the repository:

	git clone git@github.com:<user_name>/StickyNotes.git


	
Run the following to install the AngularJS generator:

    sudo npm install

    sudo npm install -g generator-angular


Goto the project root directory and run bower to install all the Bootstrap Javascript into Angular!

	bower install angular-bootstrap --save

	bower update



The –save flag tells bower to add this to our bower.json file as a dependency

To clean build of the application, run:

	
	grunt clean


To build the application, run:

	grunt build


To launch the application, run:


	grunt serve

To run karma test cases, run:


	grunt test

