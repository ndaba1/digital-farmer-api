import csv
from operator import index
from tokenize import String
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
            # print(f'{url}\n')
            try:
                self.extract_core_data(self.get_page_html(url))
            except ConnectionRefusedError:
                print("Refused")

    def extract_core_data(self, html):
        soup = BeautifulSoup(html, 'lxml')

        gen1 = PlantGenerator(soup)
        gen1.generate()

        gen2 = DiseaseGenerator(soup)
        gen2.generate()


class PlantGenerator():
    def __init__(self, page) -> None:
        self.page = page

        self.plant_common_name = ""
        self.plant_latin_name = ""
        self.plant_description = ""
        self.plant_uses = ""
        self.plant_propagation = ""
        self.plant_diseases = []
        self.plant_sample_images = []
        self.plant_pests = []
        self.plant_taxonomy = {}
        self.plant_data_references = []

    def generate(self):
        # get plant description
        body = self.page.find("div", attrs={
            "class": "searched_word"
        })

        print(body.get_text())

        desc = self.page.find("div", attrs={
            "id": "info-Description"
        })

        # set latin_name // since you already have the latin name, why not scrape wikipedia or any other sources
        self.plant_latin_name = desc.find_next_sibling().text
        # print(body.get_text().strip())


class DiseaseGenerator():
    def __init__(self, html) -> None:
        self.page = html

        self.ds_common_name = ""
        self.ds_latin_name = ""
        self.ds_symptoms = ""
        self.ds_cause = ""
        self.ds_comments = ""
        self.ds_management = ""

    def generate(self):
        # get diseases div
        body = self.page.find("div", attrs={
            "id": "diseases"
        })
        values = body.find_next_sibling().find_all("h4")

        for val in values[1:]:
            # set names
            self.ds_common_name = val.text.split("\n")[1]
            self.ds_latin_name = val.text.split("\n")[2]

            # set the rest of values
            for name in ["symptoms", "cause", "comments", "management"]:
                answer = val.find_parent().find(
                    "div", attrs={"class": f"{name}"}).text
                if (name == "symptoms"):
                    self.ds_symptoms = answer
                elif (name == "cause"):
                    self.ds_cause = answer
                elif (name == "comments"):
                    self.ds_comments = answer
                else:
                    self.ds_management = answer
