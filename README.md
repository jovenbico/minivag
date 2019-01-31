# Vagrant ubuntu/ with ansible and docker
### NOTE: THIS SETUP IS FOR TEST AND LEARNING PURPOSES ONLY! NOT TO BE USED IN A PRODUCTION ENVIRONMENT!

### Usage
#### Start Vagrant provisioning
```
$ vagrant up --provision
$ vagrant ssh
```

#### Start docker node
``$ docker-compose up -d``  

#### Create ansible inventory
```
$ nano container
con-v-node1   ansible_ssh_user=root ansible_ssh_pass=Passw0rd ansible_host=172.16.238.10
con-v-node2   ansible_ssh_user=root ansible_ssh_pass=Passw0rd ansible_host=172.16.238.20
con-v-monitor ansible_ssh_user=root ansible_ssh_pass=Passw0rd ansible_host=172.16.238.30
$ nano ansible.cfg
[defaults]
host_key_checking = False
```
#### Test ansible inventory
``$ ansible con-v-node* -m ping -i container -vvv``  

#### Enable ssh with password to Vagrant box
```
$ sudo nano /etc/ssh/sshd_config
PasswordAuthentication yes
$ sudo service ssh restart
```  

#### Add to known_hosts
```
ssh vagrant@{{VagrantIP}}
ssh-keyscan 172.16.238.10 >> ~/.ssh/known_hosts
ssh-keyscan 172.16.238.20 >> ~/.ssh/known_hosts
ssh-keyscan 172.16.238.30 >> ~/.ssh/known_hosts
```
