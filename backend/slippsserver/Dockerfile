FROM python:3.6.3
ENV PYTHONUNBUFFERED 1

# update package lists, fix broken system packages
RUN apt-get update
RUN apt-get -f install

# load project files and set work directory
ADD . /app/
WORKDIR /app

# add required files
ADD requirements.txt /tmp/requirements.txt

# install and cache dependencies in /tmp directory.
# doing it this way also installs any newly added dependencies.
RUN pip3 install --upgrade pip
RUN pip3 install -r /tmp/requirements.txt

# create user and add to docker group
RUN adduser --disabled-password --gecos '' djangoslipps
RUN groupadd docker
RUN usermod -aG docker djangoslipps

# grant newly created user permissions on essential files
RUN chown -R djangoslipps:$(id -gn djangoslipps) ~/
RUN chown -R djangoslipps:$(id -gn djangoslipps) /app/

RUN chmod 777 /app -R 

# change user to newly created user
USER djangoslipps
