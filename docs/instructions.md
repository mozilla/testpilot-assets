This document contains instructions for cloning this repo, adding local changes and committing them.

## Preamble

Your Terminal is always going to do actions in a working directory...to see what directory you are in type `pwd`.

Your Terminal should default to being set to your home directory, so you should see something like `Users/<your user name>`

You can also type `ls` to see a list of child directories.

## Setup Step 1: Go to the Directory where you want to add the repo

You can change directories by typing `cd <path>` so, for example, if you want to clone a repo to a Repos directory in your Documents folder, you can type `cd Documents/Repos`.

If you want to create a new directory, just use the mkdir command `mkdir Documents/Repos` and then use `cd` to navigate to that directory.

Note: `cd ../` will navigate up your computer's directory structure. You can chain together this format (`../../../`) to go up multiple directories.

## Setup Step 2: Clone the Repo

Once you've navigated to the directory you want to keep your work, clone the repo

`git clone https://github.com/mozilla/testpilot-assets.git`

## Adding Files Step 1: Add Measurements

The directory structure for the testpilot-assets repo is fairly straightforward. Put your measurement spec in a clearly named folder and put it in the appropriate directory, or just create a new directory if you're making stuff for a new experiment

## Adding Files Step 2: Add Assets

Each experiments has an Assets folder, place any standalone assets that go with your spec in that folder. Make sure they are 2x raster images or SVG.

Adding Files Step Three: Update Readme

On the README.MDadd in a link to the folder you just added. Just copy the existing format.

Adding Files Step Four: Commit Changes

In your Terminal, make sure you are in the testpilot-assets directory

to commit all changes type the following

```
git add .
git commit -m "<short message explaining changes>"
git push -u origin master
```