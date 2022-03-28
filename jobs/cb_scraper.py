
from ast import Str
from utils import get_page_html
from bs4 import BeautifulSoup


class CbScrapper:
    def __init__(self, links, headers) -> None:
        self.headers = headers
        self.links = links

    def start(self):
        for link in self.links:
            main_page = get_page_html(link, self.headers)
            disease = CbDiseaseGenerator(main_page)


class CbDiseaseGenerator():
    def __init__(self, html) -> None:
        soup = BeautifulSoup(html, 'lxml')
        self.soup = soup

        self.start()

    def start(self):
        # get disease identity
        identity = self.soup.find('div', id='toidentity')
        titles = identity.find_all('h4')

        for (i, title) in enumerate(titles):
            # returns a <ul>
            data = title.find_next_sibling()
            items = data.find_all('li')

            if len(items) == 1:
                value = items[0].text.strip().replace("\n", " ")
            else:
                value = []
                for item in items:
                    data = item.text.strip().replace("\n", " ")
                    # temp = f'{data[0].strip()}: ({data[1].strip()})'
                    value.append(data)
                    # print(data)

            print({
                title.text: value
            })
