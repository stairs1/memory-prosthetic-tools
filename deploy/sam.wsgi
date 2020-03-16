#! /usr/bin/python3.6

import logging
import sys
import os

logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/var/www/html/sam/SAMdroid/server')

print("****************** exec is {}".format(sys.executable))

from server import app as application