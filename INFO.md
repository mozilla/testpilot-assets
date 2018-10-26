1. Download Sketch Measure Plugin here: [Link](https://github.com/utom/sketch-measure)

2. Once you UX spec is ready for export, use Sketch Measure Plugin to export the measurements into a folder with an index.html file.

3. Clone this repository
	```
	git clone https://github.com/mozilla/testpilot-assets.git
	```

4. Move the exported measurement folder into the repository locally (move it inside the experiment you are working on)

5. Update your changes to the repository
	```
	git add .
	git commit -m "comments about your changes"
	git push origin master
	```

6. Now your measurement is in the github repository, find the link to your measurement (where your index.html is). For example, if your index.html is in this path: 
	```
	https://github.com/mozilla/testpilot-assets/tree/master/Experiment_Name/Your_Folder
	```
	then you can view your measurement in this link: 
	```
	https://mozilla.github.io/testpilot-assets/Experiment_Name/Your_Folder
	```
	
7. Add your link to the README file and it will be updated to the github page.
