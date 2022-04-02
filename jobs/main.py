from cb_scraper import CbScrapper
from pv_scraper import PvScraper
from config import config, headers, cabi

if __name__ == "__main__":
    # s = PvScraper(config['LOCAL_TEST_URL'], headers)
    # s.start()
    s = CbScrapper(cabi, headers)
    s.start()
