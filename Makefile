up:
	docker compose -f docker-compose.yml up -d --build --force-recreate && docker logs -f metro_app

down:
	docker compose -f docker-compose.yml down

dev:
	npm run dev

start:
	npm run build && npm start