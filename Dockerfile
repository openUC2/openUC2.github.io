FROM caddy:2.10.2

COPY Caddyfile /etc/caddy/Caddyfile
COPY build/assets/images /srv/assets/images
COPY --exclude=build/assets/images build /srv
