# Instructions for Adding New Content

This document contains instructions for cloning this repo, adding local changes and committing them for public consumption.

## Prerequisites

Basically the goal here is to make local changes to your testpilot-assets repo and then push changes to the shared repo for public consumption.

In order to do this, you'll need:
1.To make sure you have a GitHub account and have Git running and configured on your local machine. [docs](https://help.github.com/articles/set-up-git/).
2. To make sure you are a contributor on this repo. Talk to John or Wil about this one.
3. A text editor to make updates to main [README.md](../README.md) file.
4. Modest familiarity with the Terminal app on your computer.

### Terminal Tips

* The Terminal is an execution environment on your computer. Basically, if you type in some instructions and it does some stuff for you. If, for example, you type `echo pizza` the Terminal will print `pizza` back to you. Heady stuff indeed.
* Your Terminal is always going to execute actions in a working directory.
* To see what directory you are in at any time type `pwd`.
* Your Terminal will default to being set to your home directory, so you should see something like `Users/<your user name>`
* You can also type `ls` to see a list of child directories of your current directories.
* You can change directories in your Terminal by typing `cd <path>`. So, for example, if you want to clone a repo to a Repos directory in your Documents folder, you can type `cd Documents/Repos`.
* If you want to create a new directory, just use the mkdir command `mkdir Documents/Repos` and then use `cd` to navigate to that directory.
* `cd ../` will navigate up your computer's directory structure. You can chain together this format (`../../../`) to go up multiple directories.
* `cd ~` will take you back to your home directory.

## Setup Your Environment

Skip this section if you've already cloned the testpilot-assets repository.

### 1. Go to the directory where you want to add the repo

Open your Terminal and use the `cd` command to navigate to the folder where you want to put your local copy of testpilot-assets.

### 2. Clone the Repo

Once you've navigated to the directory you want to keep your work, clone the repo:

`git clone https://github.com/mozilla/testpilot-assets.git`

## Adding Files

### 1. Make sure you have the latest version of testpilot-assets

Since multiple people may be committing to the testpilot-assets repo, it's a good idea to keep your local copy up to date.

Whenever you want to add new stuff to the repo do the following:

```
cd <path to your local testpilot assets repo>

# Ensure you're in the master git branch
git checkout master

# pull down any newly committed content from the GitHub copy of master
git pull origin master
```

If something goes wrong in this process, you may have random junk stuff in your in your local master branch. You can wipe out local changes and get a fresh start with the following.

```
cd <path to your local testpilot assets repo>
git checkout master
git fetch origin
git reset --hard origin/master
```

### 2. Create a new branch to add your changes

Next up, you'll create a new git branch to add your changes. Git branch names must not have any spaces. Try to keep your name short and descriptive so that reviewers can tell what you're trying to do.

```
git checkout -b <short-branch-name>
```

### 3. Add Measurements

The directory structure for the testpilot-assets repo is fairly straightforward. Put your measurement spec in a clearly named folder and put it in the appropriate directory, or just create a new directory if you're making stuff for a new experiment.

### 4. Add Assets

Each experiments has an *Assets* folder, place any standalone assets that go with your spec in that folder. Make sure they are 2x raster images or SVG formatted.

### 5. Update Readme

In the README.md add in a link to the folder you just added. Just check the existing format to see how.

### 6. Commit Changes

In your Terminal, make sure you are in the testpilot-assets directory.

To commit all changes type the following:

```
git add .
git commit -m "<short message explaining changes>"
git push -u origin <name-of-your-branch>
```

### 7. Go to GitHub and make a pull request

Visit the [testpilot-assets repo](https://github.com/mozilla/testpilot-assets) on GitHub, and you should now see a yellow bar asking if you'd like to make a pull request for your commit. Click yes to confirm.

It's generally good practice to have someone else review and merge code you commit. You can message a peer on your team or just assign someone through the GitHub interface.

Reviewers should make sure any new README links are present and correct, that new assets are added, and that spec files are added correctly.

Once your commit is merged into master, GitHub will automatically redeploy the [testpilot-assets site](https://mozilla.github.io/testpilot-assets/) within a few minutes.

### 8. Finishing up

Once your new code is merged, it's good practice to go ahead and complete step 1 of these instructions. That way your local master branch will always be up to date.

## Finally

If you've massively broken your local repository and just want to start over from scratch, just throw it in the trash and clone a new one :)