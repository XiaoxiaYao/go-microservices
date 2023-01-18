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
