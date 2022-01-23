import csv
from bs4 import BeautifulSoup
import requests
import urllib3


class PvScraper():
    def __init__(self, url, headers) -> None:
        self.base_url = url
        self.headers = headers
        self.links = []

    def start(self):
        main_page = self.get_page_html(self.base_url)
        self.extract_links(main_page)
        self.fetch_plants_data()

    def get_page_html(self, link):
        print(f'Scraping URL: {link}')
        response = requests.get(url=link, headers=self.headers)
        return response.content

    def extract_links(self, html):
        soup = BeautifulSoup(html, 'lxml')
        links = soup.find_all("a", attrs={
            "class": "link-reset"
        })

        for link in links:
            if link.attrs['href'].__contains__("infos"):
                self.links.append(link.attrs['href'])

    def normalize_url(self, path):
        (proto, address, port) = urllib3.get_host(self.base_url)
        if port:
            return f'{proto}://{address}:{port}{path}'
        return f'{proto}://{address}{path}'

    def fetch_plants_data(self):
        for link in self.links:
            url = self.normalize_url(link)
            print(f'{url}\n')
