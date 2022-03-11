import requests

from bs4 import BeautifulSoup


def get_page_html(link, headers):
    print(f'Scraping URL: {link}')
    response = requests.get(url=link, headers=headers)
    return response.content
