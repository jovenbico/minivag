Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.box_check_update = false
  config.vm.hostname = "ansible-server"
  config.vm.network "private_network", ip: "192.168.33.20"

  config.vm.provider "virtualbox" do |vbox|
      vbox.name = "ubuntu_ansible_sshd"
      vbox.memory = "4096"
      vbox.cpus = 2
  end

  config.vm.provision "shell", inline: $install_docker_compose_script
  #config.vm.provision "shell", inline: $pull_docker_image_script
  config.vm.provision "shell", inline: $install_ansible_script

  ## Sync local directory to vagrant box ##
  #config.vm.synced_folder "D:\\_My_Documents\\Workspace\\jalportal-projects\\jal-deployment\\ansible-configs", "/ansible-configs"

end

$install_docker_compose_script = <<-SCRIPT
echo '### Install Docker CE'
apt-get update && apt-get upgrade -y
apt-get -y install apt-transport-https ca-certificates curl gnupg2 software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt-get update && apt-get -y install docker-ce=18.06.1~ce~3-0~ubuntu

echo '### Adding vagrant user to docker group'
usermod -aG docker vagrant

echo '### Install Docker Compose'
curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
SCRIPT

$pull_docker_image_script = <<-SCRIPT
echo '### Pull Docker Images'
docker pull jovenbico/ubuntu-ssh-enabled:v3
docker pull mongo:3.6-stretch
SCRIPT

$install_ansible_script = <<-SCRIPT
echo '### Install Ansible'
apt-get -y install python-pip && pip install 'ansible==2.7.6'

echo '### Install sshpass'
apt-get -y install sshpass
SCRIPT
