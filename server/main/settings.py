"""
Django settings for main project.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

import os
import sys
from pathlib import Path

import environ

BASE_DIR = Path(__file__).resolve().parent.parent

env = environ.Env(
    DJANGO_DEBUG=(bool, False),
    DJANGO_SECRET_KEY=str,
    DJANGO_CORS_ORIGIN_REGEX_WHITELIST=(list, []),
    DB_NAME=str,
    DB_USER=str,
    DB_PASSWORD=str,
    DB_HOST=str,
    DB_PORT=int,
    DJANGO_STATIC_URL=(str, "/static/"),
    DJANGO_MEDIA_URL=(str, "/media/"),
    DJANGO_STATIC_ROOT=(str, os.path.join(BASE_DIR, "static")),
    DJANGO_MEDIA_ROOT=(str, os.path.join(BASE_DIR, "media")),
    PYTEST_XDIST_WORKER=(str, None),
    CHATGPT_API_KEY=(str, None),
)

SECRET_KEY = env("DJANGO_SECRET_KEY")

DEBUG = env("DJANGO_DEBUG")

ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOST")

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.gis",
    # External apps
    "reversion",
    "admin_auto_filters",
    "storages",
    "corsheaders",
    "rest_framework",
    "rest_framework.authtoken",
    "django_filters",
    # Local Apps
    "event",
    "restaurant",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "main.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            "apps/templates",
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "main.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.contrib.gis.db.backends.postgis",
        "HOST": env("DB_HOST"),
        "PORT": env("DB_PORT"),
        "NAME": env("DB_NAME"),
        "USER": env("DB_USER"),
        "PASSWORD": env("DB_PASSWORD"),
        "OPTIONS": {"options": "-c search_path=public"},
    },
}


AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"

TIME_ZONE = env("DJANGO_TIME_ZONE")

USE_I18N = True

USE_TZ = True


STATIC_URL = env("DJANGO_STATIC_URL")
MEDIA_URL = env("DJANGO_MEDIA_URL")

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
    },
}

STATIC_ROOT = env("DJANGO_STATIC_ROOT")
MEDIA_ROOT = env("DJANGO_MEDIA_ROOT")

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_ALL_ORIGINS = True
CORS_ORIGIN_WHITELIST = ("http://localhost:5173", "http://localhost:9001")


TESTING = (
    any(
        [
            arg in sys.argv
            for arg in [
                "test",
                "pytest",
                "/usr/local/bin/pytest",
                "py.test",
                "/usr/local/bin/py.test",
                "/usr/local/lib/python3.12/dist-packages/py/test.py",
            ]
        ]
    )
    or env("PYTEST_XDIST_WORKER") is not None
)


REST_FRAMEWORK = {
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
    "PAGE_SIZE": 100,
    "DEFAULT_FILTER_BACKENDS": (
        "django_filters.rest_framework.DjangoFilterBackend",
        "rest_framework.filters.SearchFilter",
        "rest_framework.filters.OrderingFilter",
    ),
}


ASGI_APPLICATION = "main.asgi.application"

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "filters": {
        "remove_sensitive": {
            "()": "django.utils.log.CallbackFilter",
            "callback": lambda record: "medical_history" not in record.getMessage().lower(),
        },
    },
    "handlers": {
        "file": {
            "level": "INFO",
            "class": "logging.FileHandler",
            "filename": "debug.log",
            "filters": ["remove_sensitive"],
        },
    },
    "loggers": {
        "": {
            "handlers": ["file"],
            "level": "INFO",
            "propagate": True,
        },
    },
}

CSRF_COOKIE_SECURE = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_HTTPONLY = False
