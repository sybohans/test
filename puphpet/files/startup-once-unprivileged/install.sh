#!/bin/bash
cd /vagrant/html
bower install
grunt
rm -rf app/cache/*
rm -rf app/logs/*

php app/console doctrine:schema:create
php app/console doctrine:fixtures:load

