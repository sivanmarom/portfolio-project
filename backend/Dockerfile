FROM python:3.10-slim

# הגדרת תיקיית העבודה
WORKDIR /app

# העתקת קבצים
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# פתיחת פורט
EXPOSE 5000

# הרצת האפליקציה
CMD ["python", "app.py"]