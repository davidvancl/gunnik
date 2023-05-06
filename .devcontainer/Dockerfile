FROM fedora:39

LABEL autho="develop.programme@gmail.com"
LABEL version=0.0.1

RUN dnf -y upgrade
RUN dnf -y update

RUN dnf -y install curl

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 19.9.0
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN node -v
RUN npm -v

RUN npm install --global yarn
RUN dnf -y install git-all

ARG CONTAINER_USER=devuser
ARG CONTAINER_GROUP=devusers
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd -g $USER_UID $CONTAINER_GROUP
RUN useradd $CONTAINER_USER

RUN usermod -G $CONTAINER_GROUP $CONTAINER_USER

WORKDIR /gunnik

CMD ["/bin/sh", "-c", "bash"]