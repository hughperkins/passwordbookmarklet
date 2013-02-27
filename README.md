passwordbookmarklet
===================

This is a bookmarklet to generate unique secure passwords for each website from a single master password.

The cool thing about this system is:
- you dont need a password safe, which you would need to store somewhere, backup and so on
- each site's password is unique
- there is no obvious way to guess the master password, even if you know a site's password, and the
  name of that site (but I'm not an expert in this domain, so I cannot guarantee that, and you use 
  this script at your own risk).

To use 
------

- In your internet browser, create a bookmark in your bookmarks toolbar, and paste the contents of 
inputpassowrd.js inside
- Go to a page where you want to enter a password
   - click the bookmark
   - enter your master password, and press 'enter'
   - that's it!

The password will be unique for each domain, and reasonably secure.  Ways to hack this system 
might include:
- shoulder-surfing your typing
- key-loggers
- javascript hacks in the target website

I'm fairly sure that it's non-trivial to work backwards from a password to retrieve the 
original master password, but I'm not an expert in this domain, and cannot guarantee that, and 
you use this script at your own risk.

Note that there are a couple of additional bookmarklets available here:
- showpass.js reveals all the password fields on the page, so you can check that the generated
  passwords look reasonable
- createpassword.js has two password fields, so you have to enter the password twice.  If they 
  are different, then it will show an error, and refuse to proceed.

