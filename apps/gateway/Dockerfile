FROM rentals/backend

WORKDIR /app

RUN yarn && yarn build @app/gateway 

CMD [ "yarn", "start:gateway:prod" ]
