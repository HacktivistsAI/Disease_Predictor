# 1 
FROM python:3.7

ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN apt update

RUN cp requirements.txt /tmp
RUN cd /tmp && pip install -r requirements.txt


# 4
ENV PORT 5000

# 5
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 main:main
