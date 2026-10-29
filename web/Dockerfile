FROM node:22-alpine AS builder
WORKDIR /app
ENV API_INTERNAL_URL=http://api:8000
COPY package.json ./
# Temporary until a reviewed package-lock.json is committed; replace with npm ci.
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0
RUN addgroup -S -g 10001 appgroup && adduser -S -u 10001 -G appgroup appuser
COPY --from=builder --chown=appuser:appgroup /app/.next/standalone ./
COPY --from=builder --chown=appuser:appgroup /app/.next/static ./.next/static
USER appuser
EXPOSE 3000
CMD ["node", "server.js"]
