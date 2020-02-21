FROM node:13-alpine

ENV YARN_VERSION 1.21.1
ENV HOST 0.0.0.0
ENV APP_ROOT /var/www/app
ENV PORT 3000

RUN apk add curl --no-cache

# Yarn インストール
RUN curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
    && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
    && rm yarn-v$YARN_VERSION.tar.gz

WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}

EXPOSE 3000

RUN yarn && yarn build
RUN npm i docsify-cli -g
# pm2
RUN yarn global add pm2

CMD ["pm2-runtime", "npm", "--", "start"]
