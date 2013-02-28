#!/usr/bin/python

# replicate what the bookmarklets do, using python, so can run from console

import sys
import os
import sha
import base64
import getpass

if len(sys.argv) == 2:
    domain = sys.argv[1]
else:
    domain = raw_input("Please enter domain: ")
masterpassword = getpass.getpass("Please enter master password for " + domain + ": ")

mysha =  sha.new(masterpassword + ":" + domain ).digest()

b64 = base64.b64encode(mysha)
print "Password for " + domain + " is " + b64[:16] + '1a'

