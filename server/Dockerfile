# 1 
FROM python:3.7

ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY . /app

RUN apt update

RUN pip install -r requirements.txt

RUN pip install gunicorn


EXPOSE 80

EXPOSE 443

# 4
ENV PORT 5000

# 5
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 main:main
