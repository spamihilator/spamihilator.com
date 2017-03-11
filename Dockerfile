FROM ubuntu:16.04

RUN apt-get update && \
    apt-get install -y curl && \
    rm -rf /var/lib/apt/lists/*
RUN gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 && \
    curl -sSL https://get.rvm.io | bash -s stable
RUN /bin/bash -l -c "rvm requirements && rvm install ruby-1.8.7-p374"

ADD Gemfile /spamihilator.com/Gemfile
ADD Gemfile.lock /spamihilator.com/Gemfile.lock
ADD .ruby-gemset /spamihilator.com/.ruby-gemset
ADD .ruby-version /spamihilator.com/.ruby-version

WORKDIR /spamihilator.com
RUN /bin/bash -l -c "gem install bundler && bundle install"

ADD . /spamihilator.com/
RUN /bin/bash -l -c "compass compile"

ENTRYPOINT ["/bin/bash", "-l", "-c"]
