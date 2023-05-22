include .env


.PHONY: all build-push

all: build-push

build-push: build push

build:
	docker buildx build --platform linux/amd64,linux/arm64 --push -t jiggyai/chatbot-ui:${TAG} .

run:
	export $(cat .env | xargs)
	docker stop chatbot-ui || true && docker rm chatbot-ui || true
	docker run --name chatbot-ui --rm -e OPENAI_API_KEY=${OPENAI_API_KEY} -p 3000:3000 chatbot-ui

logs:
	docker logs -f chatbot-ui

push:
	docker push jiggyai/chatbot-ui:${TAG}
