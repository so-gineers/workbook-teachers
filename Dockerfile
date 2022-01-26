ARG NODE_VERSION
FROM ${NODE_VERSION} AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM ${NODE_VERSION} AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ARG NODE_ENV=devolpement
RUN echo ${NODE_ENV} \
    && NODE_ENV=${NODE_ENV} yarn build

FROM ${NODE_VERSION} AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs \
     && adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/i18n.json ./i18n.json
COPY --from=builder /app/components ./components
COPY --from=builder /app/locales ./locales
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pages ./pages

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 0

CMD ["yarn", "start"]