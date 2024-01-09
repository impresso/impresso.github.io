FROM ruby:3.0-alpine AS jekyll_builder

RUN apk update && \
  apk add --no-cache build-base gcc cmake git
RUN gem update --system && gem update bundler && gem install bundler jekyll:3.9.3
USER root
# Set the working directory inside the container
WORKDIR /app

# Clone the git repo with the specified branch
RUN git clone -b v1.0.0 https://github.com/impresso/impresso.github.io.git impresso.github.io-v1.0.0

# Set the working directory to the cloned repo
WORKDIR /app/impresso.github.io-v1.0.0

RUN mkdir -p /app/impresso.github.io-v1.0.0/_site

ENV PAGES_REPO_NWO impresso/impresso.github.io
ENV BUNDLE_ALLOW_BUNDLER_DEPENDENCY_CONFLICTS=true
# Install Gemfile dependencies
#RUN gem install --default bundler -v 2.4.19
RUN bundle update
RUN bundle add webrick
RUN bundle install
RUN bundle clean --force
# Build the Jekyll site
RUN bundle exec jekyll build

# 2. copy
FROM busybox:1.36

WORKDIR /impresso.github.io-v1.0.0

COPY --from=jekyll_builder /app/impresso.github.io-v1.0.0/_site ./