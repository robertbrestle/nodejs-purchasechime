#!/bin/bash
sudo apt update

# used for hiding mouse cursor
sudo apt install unclutter -y

# install nodejs 16
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install nodejs -y
node -v

# enable browser autostart using LXDE configuration
mkdir -p ~/.config/lxsession/LXDE-pi
echo -e "@lxpanel --profile LXDE-pi\n@pcmanfm --desktop --profile LXDE-pi\n#@xscreensaver -no-splash\n@xset s off\n@xset -dpms\n@xset s noblank\n@unclutter -idle 1\npoint-rpi\n@chromium-browser --start-fullscreen --start-maximized --force-device-scale-factor=1.5  http://localhost:8080" > ~/.config/lxsession/LXDE-pi/autostart

# install npm packages
cd ..
npm install
cd ..

# PM2 setup
sudo npm install pm2@latest -g
pm2 start nodejs-purchasechime/index.js --name purchasechime
pm2 startup
#pm2 save
echo -e "Please follow the above instructions then execute the following command:\n$ pm2 save"
