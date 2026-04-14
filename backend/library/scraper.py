import requests

from bs4 import BeautifulSoup

from urllib.parse import urljoin

from .models import Book


BASE_URL = "https://books.toscrape.com/"


def scrape_books():

    url = BASE_URL

    while url:

        response = requests.get(url)
        response.encoding = "utf-8"

        soup = BeautifulSoup(
            response.text,
            "html.parser"
        )

        books = soup.find_all(
            "article",
            class_="product_pod"
        )

        for book in books:

            title = book.h3.a["title"]

            rating_class = book.p["class"][1]

            rating_map = {
                "One": 1,
                "Two": 2,
                "Three": 3,
                "Four": 4,
                "Five": 5
            }

            rating = rating_map.get(
                rating_class,
                0
            )

            # Fix URL joining properly

            relative_url = book.h3.a["href"]

            book_url = urljoin(
                url,
                relative_url
            )

            # Open book detail page

            description = ""

            try:

                book_page = requests.get(
                    book_url
                )

                book_page.encoding = "utf-8"

                book_soup = BeautifulSoup(
                    book_page.text,
                    "html.parser"
                )

                desc_tag = book_soup.find(
                    "div",
                    id="product_description"
                )

                if desc_tag:

                    description = desc_tag.find_next_sibling(
                        "p"
                    ).text.strip()

            except Exception as e:

                print("Description error:", e)

            # Avoid duplicates

            if not Book.objects.filter(
                title=title
            ).exists():

                Book.objects.create(

                    title=title,

                    author="",

                    description=description,

                    rating=rating,

                    book_url=book_url

                )

        # Next page logic

        next_button = soup.find(
            "li",
            class_="next"
        )

        if next_button:

            next_url = next_button.a["href"]

            url = urljoin(
                url,
                next_url
            )

        else:

            url = None