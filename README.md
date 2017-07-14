# Cinq Test App
This web app was made by Jonatan Pietroski dos Santos and intends to be a brief presentation of his knowledge of AngularJS

## Getting Started

In order for you to run this application, you're gonna need to install docker and docker-compose.

### Installing Docker
If you are using a linux computer, open your terminal and run the following commands:

```
sudo apt-get update
```

And then

```
sudo apt-get install docker
```

### Installing docker-compose

Next, you need to install docker-compose.

```
sudo apt-get install docker-compose
```


## For Windows Users
Follow the installation guide: https://www.docker.com/docker-windows. You may run into some trouble while you try run Docker on windows,
if docker doesn't have the right permisions it will not start.

Open a bash terminal on windows and run the following commands

```
/c/Program\ Files/Oracle/VirtualBox/VBoxManage.exe sharedfolder add default --name c --hostpath 'c:\' --automount
```

that's it, you're ready to go.

## Running the App
Open a terminal window on linux or open the "docker for windows" app, and navigate to the root of the project.

run the following command:

```
docker-compose up
```

Go to your browser and open the following url:

```
http://localhost:8090
```
