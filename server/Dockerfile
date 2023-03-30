# 1 
FROM python:3.7


# run this before copying requirements for cache efficiency
RUN pip install --upgrade pip

#set work directory early so remaining paths can be relative

COPY . .
WORKDIR /server/src


# 3 
RUN pip install -r requirements.txt

# 4
ENV PORT 5000

# 5
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 main:main
