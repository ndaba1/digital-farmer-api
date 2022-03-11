
from utils import get_page_html
from bs4 import BeautifulSoup


class CbScrapper:
    def __init__(self, base_url, headers) -> None:
        self.base_url = base_url
        self.headers = headers
        self.links = []

    def start(self):
        main_page = get_page_html(self.base_url, self.headers)
        self.extract_links(main_page)

    def extract_links(self, html):
        soup = BeautifulSoup(html, 'lxml')
        links = soup.find_all("a", attrs={
            "class": "link-reset"
        })

        for link in links:
            if link.attrs['href'].__contains__("infos"):
                self.links.append(link.attrs['href'])
