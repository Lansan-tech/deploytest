FROM rentals/backend

WORKDIR /app

RUN yarn && yarn build @app/auth 

CMD [ "yarn", "start:auth:prod" ]
