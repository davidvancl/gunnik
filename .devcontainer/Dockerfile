FROM fedora:39

LABEL autho="develop.programme@gmail.com"
LABEL version=0.0.1

RUN dnf -y upgrade
RUN dnf -y update

RUN dnf -y install nodejs
RUN dnf -y install git-all

WORKDIR /gunnik

CMD ["/bin/sh", "-c", "bash"]