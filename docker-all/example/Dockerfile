FROM quay.io/keycloak/keycloak:latest

# Enable health and metrics support
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

# Configure a database vendor
ENV KC_DB=mysql

WORKDIR /opt/keycloak

# Build Keycloak
RUN /opt/keycloak/bin/kc.sh build

# Set entry point
ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
