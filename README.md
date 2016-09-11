# GoPatrol - multi-service with map
fork from [GoPatrol](https://github.com/GoPatrolTeam/GoPatrol)  
  
![](http://i217.photobucket.com/albums/cc44/x3388638/2016-09-10%20190457_zpseyfu5ry1.png)  
  
![](http://i217.photobucket.com/albums/cc44/x3388638/2016-09-10%20203730_zpshmtrwyzb.png)  

![](http://i217.photobucket.com/albums/cc44/x3388638/2016-09-11%20005713_zpsoquzaqkj.png)

---
## Usage
Clone and fill out the config
```
git clone https://github.com/x3388638/GoPatrol.git
cd GoPatrol
mv src/example_config.js src/config.js
vim src/config.js
```
Install modules
```
npm install
```
Clone client and fill out config
```
git clone https://github.com/x3388638/PokemonMap-for-GoPatrol.git web
cd web
mv static/config.js.example static/config.js
vim static/config.js
```
Build Client
```
npm install
npm run build
```
Start server
```
cd PATH/TO/GoPatrol
npm run build  
npm start
open 127.0.0.1:7774 (7774 is the default port)
```
