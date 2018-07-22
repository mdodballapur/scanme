FROM alpine:3.8

RUN apk --update add openjdk8-jre

COPY ./target/scanners-0.0.1-SNAPSHOT.jar scanner.jar

CMD java -jar scanner.jar


