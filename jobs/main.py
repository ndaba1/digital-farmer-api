from pv_scraper import PvScraper
from config import config, headers

if __name__ == "__main__":
    s = PvScraper(config['LOCAL_TEST_URL'], headers)
    s.start()
