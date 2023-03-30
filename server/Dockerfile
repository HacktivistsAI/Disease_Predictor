# 1 
FROM python:3.7

echo $(pwd)

# 2
RUN pip install -r requirements.txt

# 3
COPY src/ /main
WORKDIR /main

# 4
ENV PORT 5000

# 5
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 main:main
