# VCONFERENCES BACKEND

This is the backend project of the VCONFERENCES service using `Django 4.0.6`.

This project was made using `Python 3.10.5`. If something doesn't work like it's supposed to, there is a chance this is the cause.

## Setup

To prevent clashes between libraries, a virtual environment is recomended.

You can create one using
`python3 -m virtualenv venv`.

And then accesing it depending on your operative system.

## Project configuration

To start, install the dependencies using

```
pip install -r requirements.txt
```

Next, you need to create the database. For now, we will use sqlite3 which Django automatically generates for you.

```
python manage.py migrate
```

After that, you need to populate the database with the example data in the configuration files. You need to run these fixtures in order since some records have dependencies on others.

```
python manage.py loaddata initial_companies initial_people initial_speakers initial_talks initial_attendees
```

Create a superuser to access Django-Admin panel in order to alter exisiting records.

```
python manage.py createsuperuser
```

Finally, you can start the server using

```
python manage.py runserver
```

The server automatically runs on port 8000.
You can access Djando-Admin panel at http://localhost:8000/admin/
