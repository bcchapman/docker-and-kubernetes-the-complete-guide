# Starting application locally for development
docker-compose -f docker-compose-local.yaml --profile local up
Access application at localhost:3000

# Starting application locally with nginx
docker-compose -f docker-compose-local.yaml up
Access application at localhost:8080