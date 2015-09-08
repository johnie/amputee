# Contributing

Want to contribute to amputee? Great!

I'm are more than happy to accept external contributions to the project in the form of [bug reports](../../issues) and pull requests.

## Initial setup

1. Setup Gulp: `sudo npm install -g gulp`
1. Fork the project on github and pull down your copy.
   > replace the {{ username }} with your username and {{ repository }} with the repository name

        git clone git@github.com:{{ username }}/{{ repository }}.git

1. Test your change results in a working build.
   > in the repo you've made changes to, try generating a build:

        cd $REPO
        npm install
        gulp build

The builds will be placed into the `dist/` directory if all goes well.

1. Commit your code and make a pull request.

That's it for the one time setup. Now you're ready to make a change.

## Submitting a pull request

I iterate fast! To avoid potential merge conflicts, it's a good idea to pull from the main project before making a change and submitting a pull request. The easiest way to do this is setup a remote called `upstream` and do a pull before working on a change:

    git remote add upstream git://github.com/johnie/amputee.git

Then before making a change, do a pull from the upstream `master` branch:

    git pull upstream master

To make life easier, add a "pull upstream" alias in your `.gitconfig`:

    [alias]
      pu = !"git fetch origin -v; git fetch upstream -v; git merge upstream/master"

That will pull in changes from your forked repo, the main (upstream) repo, and merge the two. Then it's just a matter of running `git pu` before a change and pushing to your repo:

    git checkout master
    git pu
    # make change
    git commit -a -m 'Awesome things.'
    git push

Lastly, don't forget to submit the pull request.
