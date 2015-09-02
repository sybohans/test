#!/bin/bash
clear
npm install -g bower \n 
npm install -g grunt-cli \n 

gem install sass
gem install compass

cd /vagrant/html

curl -sS https://getcomposer.org/installer | php
php composer.phar install
composer update --lock
npm install

