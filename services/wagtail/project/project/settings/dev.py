import os
from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = int(os.environ.get('DEBUG', '0'))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('DEV_SECRET_KEY', '')

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = os.environ.get('DEV_ALLOWED_HOSTS', '').split(' ')

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


try:
    from .local import *
except ImportError:
    pass
