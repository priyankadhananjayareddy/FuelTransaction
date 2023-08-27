# Use a suitable Maven runtime as a build image
FROM maven:3.8.4-openjdk-17-slim AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src/ /app/src/
RUN mvn package

# Use a smaller base image for the runtime environment
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

COPY --from=build /app/target/FuelTransactionApp-1.0-SNAPSHOT.jar .

# Expose any necessary ports (if your app listens on a specific port)
EXPOSE 9092

# Run the application
CMD ["java", "-jar", "FuelTransactionApp-1.0-SNAPSHOT.jar"]
