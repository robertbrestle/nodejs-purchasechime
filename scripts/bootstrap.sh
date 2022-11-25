#!/bin/bash
sudo apt update

# install nodejs 16
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install nodejs -y
node -v

# nodejs-purchasechime configuration
cd /opt/
chmod +x nodejs-purchasechime/scripts/start_chromium.sh
cd nodejs-purchasechime
npm install
cd ..

# install the autostart service
sudo cp nodejs-purchasechime/scripts/purchasechime-chromium.service /etc/systemd/system/purchasechime-chromium.service
sudo systemctl daemon-reload
sudo systemctl enable purchasechime-chromium.service

# PM2 setup
sudo npm install pm2@latest -g
pm2 start nodejs-purchasechime/index.js --name purchasechime
pm2 startup
#pm2 save
echo -e "Please follow the above instructions then execute the following command:\n$ pm2 save"
