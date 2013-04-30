Spamihilator website
====================

This repository contains the source files for the Spamihilator website.

<http://www.spamihilator.com>

Everybody is invited to contribute! Please fork the repository and send
me pull requests. I will check and upload them to the Spamihilator web
server as soon as possible. For more information read the
[GitHub help](https://help.github.com/articles/using-pull-requests)
on creating pull requests.

Building
--------

This website has been created using [Jekyll](http://jekyllrb.com). If
you want to build it please follow these steps:

1. Download and install **Ruby 1.8.7** (if you haven't done so already).
   
   Under *Windows* I recommend to use [RubyInstaller](http://rubyinstaller.org/).
   Under *Linux* and *Mac OS* I highly recommend to use [rvm](https://rvm.io/)
   as the repository already contains proper `.ruby-version` and
   `.ruby-gemset` files.

2. Install the **bundler** gem (if you haven't done so already).

   `gem install bundler`

3. Clone or download this repository.

4. Open a command line shell in the cloned directory and enter the
   following command:

   `bundle install`

5. After that you are ready to build the website using the following
   commands:

   `compass compile`  
   `jekyll`

6. Repeat these commands whenever you make a change. The files will be
   compiled to the subdirectory `_site`.

License
-------

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png" /></a><br />
If not noted otherwise the files in the <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Spamihilator website</span>
repository by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.michel-kraemer.com" property="cc:attributionName" rel="cc:attributionURL">Michel Krämer</a>
are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>.
Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="http://www.spamihilator.com" rel="dct:source">http://www.spamihilator.com</a> and
<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/michel-kraemer/spamihilator.com" rel="dct:source">https://github.com/michel-kraemer/spamihilator.com</a>.
