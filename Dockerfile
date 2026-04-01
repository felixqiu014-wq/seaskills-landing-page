FROM public.ecr.aws/docker/library/node:22.14.0-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS build
WORKDIR /app
ARG GEMINI_API_KEY=""
ARG APP_URL=""
ENV GEMINI_API_KEY=${GEMINI_API_KEY}
ENV APP_URL=${APP_URL}
COPY . .
RUN npm run build

FROM public.ecr.aws/nginx/nginx-unprivileged:1.27-alpine AS runtime
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist ./
USER 101
EXPOSE 8080
HEALTHCHECK CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
