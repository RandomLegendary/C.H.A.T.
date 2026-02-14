FROM openjdk:17

WORKDIR /app
COPY . .

RUN javac Application.java

CMD ["java", "Application"]
