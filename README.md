# Purchase Chime
Rings a bell and renders results when order data is pushed to an AWS SQS queue.

# Setup
Requires NodeJS v16+

1. Run `node ./index.js`  
2. Open browser to `localhost:8080`  

## Raspberry Pi OS Setup

1. Run `sudo raspi-config` and enable **Desktop Autologin**  
    a. **1 System Options** > **S5 Boot / Auto Login** > **B4 Desktop Autologin**  
2. Run `bootstrap.sh` from this repo  
3. Reboot the device  

&nbsp;
