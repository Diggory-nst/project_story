from operator import itemgetter
from dotenv import load_dotenv
import os

load_dotenv()

dev = {
    "name": os.getenv('DEV_NAME'),
    "password": os.getenv('DEV_PASSWORD'),
    "debug": os.getenv('DEBUG_DEV')
}

pro = {
    "name": os.getenv('PRO_NAME'),
    "password": os.getenv('PRO_PASSWORD'),
    "debug": os.getenv('DEBUG_PRO')
}

config_raw = {
    "dev": dev,
    "pro": pro
}
env = os.getenv('PYTHON_ENV')
config = config_raw[env]
