#!/bin/bash
expo build:web
ssh pi@192.168.0.185 'sudo rm -rf /var/www/html/web-build
                        echo hekk
                        exit'
scp -r web-build pi@192.168.0.185:/var/www/html