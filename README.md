# Vagrant ubuntu/ with ansible and docker

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
$ nano inventory
cs-v-node1 ansible_ssh_user=root ansible_ssh_pass=Passw0rd ansible_host=172.16.238.10
cs-v-node2 ansible_ssh_user=root ansible_ssh_pass=Passw0rd ansible_host=172.16.238.20
cs-v-node3 ansible_ssh_user=root ansible_ssh_pass=Passw0rd ansible_host=172.16.238.30
$ nano ansible.cfg
[defaults]
host_key_checking = False
```
#### Test ansible inventory
``$ ansible cs-v-node* -m ping -i inventory -vv``  

#### Enable ssh with password to Vagrant box
```
$ sudo nano /etc/ssh/sshd_config
PasswordAuthentication yes
$ sudo service ssh restart
```
