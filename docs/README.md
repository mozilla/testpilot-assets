# Instructions for Adding New Content

This document contains instructions for cloning this repo, adding local changes and committing them for public consumption.

## Prerequisites

Basically the goal here is to make local changes to your testpilot-assets repo and then push changes to the shared repo for public consumption.

In order to do this, you'll need:
1.To make sure you have a GitHub account and have Git running and configured on your local machine. [docs](https://help.github.com/articles/set-up-git/).
2. To make sure you are a contributor on this repo. Talk to John or Wil about this one
3. A text editor to make updates to the README.md file.
4. Modest familiarity with the Terminal app on your computer.

### Terminal Tips

* The Terminal is an execution environment on your computer. Basically, if you type in some instructions and it does some stuff for you. If, for example, you type `echo pizza` the Terminal will print `pizza` back to you. Heady stuff indeed.
* Your Terminal is always going to execute actions in a working directory.
* To see what directory you are in at any time type `pwd`.
* Your Terminal will default to being set to your home directory, so you should see something like `Users/<your user name>`
* You can also type `ls` to see a list of child directories of your current directories.

## Setup Your Environment

Skip this if you've already cloned the repo.

### 1. Go to the Directory where you want to add the repo

Open your Terminal and use the `cd` command to navigate to the folder where you want to put your local copy of testpilot-assets.

You can change directories in your Terminal by typing `cd <path>`. So, for example, if you want to clone a repo to a Repos directory in your Documents folder, you can type `cd Documents/Repos`.

If you want to create a new directory, just use the mkdir command `mkdir Documents/Repos` and then use `cd` to navigate to that directory.

Note: `cd ../` will navigate up your computer's directory structure. You can chain together this format (`../../../`) to go up multiple directories.

### 2. Clone the Repo

Once you've navigated to the directory you want to keep your work, clone the repo:

`git clone https://github.com/mozilla/testpilot-assets.git`

## Adding Files

### 1. Add Measurements

The directory structure for the testpilot-assets repo is fairly straightforward. Put your measurement spec in a clearly named folder and put it in the appropriate directory, or just create a new directory if you're making stuff for a new experiment

### 2. Add Assets

Each experiments has an *Assets* folder, place any standalone assets that go with your spec in that folder. Make sure they are 2x raster images or SVG.

### 3. Update Readme

In the README.md add in a link to the folder you just added. Just check the existing format to see how.

### 4. Commit Changes

In your Terminal, make sure you are in the testpilot-assets directory.

To commit all changes type the following:

```
git add .
git commit -m "<short message explaining changes>"
git push -u origin master
```