FROM php:8.0.3-apache
RUN a2enmod rewrite
RUN docker-php-ext-install pdo pdo_mysql
COPY keys /opt/keys
RUN chown -R www-data:www-data /opt/keys