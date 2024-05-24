# trpp-project
virtualenv env/myshop 
source env/myshop/bin/activate
python manage.py makemigrations
pip install -r requirements.txt
python manage.py runserver
