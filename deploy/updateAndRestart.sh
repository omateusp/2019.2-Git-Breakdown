
sudo docker-compose down

#!/bin/bash

# any future command that fails will exit the script
set -e

# Delete the old repo
rm -rf /home/ubuntu/2019.2-Git-Breakdown/

# clone the repo again
git clone https://github.com/fga-eps-mds/2019.2-Git-Breakdown.git

cd /home/ubuntu/2019.2-Git-Breakdown

sudo docker-compose build --no-cache
sudo docker-compose up
exit