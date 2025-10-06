# syntax=docker/dockerfile:1.19
# Note: the above syntax parser directive is only needed so that we can use the COPY directive with
# the `--exclude` option.

FROM caddy:2.10.2

COPY build/assets/images /srv/assets/images
COPY --exclude=build/assets/images build /srv

COPY Caddyfile /etc/caddy/Caddyfile
