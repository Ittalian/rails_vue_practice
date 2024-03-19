FROM ruby:3.1.4
RUN apt-get update -qq && apt-get install -y default-mysql-client

COPY ./rails_project/Gemfile /rails_project/Gemfile
COPY ./rails_project/Gemfile.lock /rails_project/Gemfile.lock

WORKDIR /rails_project

RUN gem update --system
RUN bundle update --bundler
RUN bundle install
