# go-microservices

# Push to docker hub

`docker build -f mail-service.dockerfile -t michaelyaonz/mail-service:1.0.0 .`
`docker push michaelyaonz/mail-service:1.0.0`

# Init swarm

`docker swarm init`

# Deploy swarm

`docker stack deploy -c swarm.yml myapp`

# Scale service

`docker service scale myapp_listener-service=3`

# Update service

`docker build -f mail-service.dockerfile -t michaelyaonz/mail-service:1.0.1 .`
Less down time
`docker service scale myapp_mail-service=2`
`docker service update --image michaelyaonz/mail-service:1.0.1 yapp_mail-service`
