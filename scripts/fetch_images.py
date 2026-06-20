#!/usr/bin/env python3
"""Download free-license placeholder photos from Wikimedia Commons.

Picks the largest landscape-oriented JPEG from the top search results for
each location and records attribution in IMAGE_CREDITS.md. These are
placeholders until Almatrips has its own photography.
"""
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)
CREDITS = []

SEARCHES = {
    "hero": "Big Almaty Lake",
    "charyn-canyon": "Charyn Canyon",
    "kolsai-kaindy-lakes": "Kolsay Lakes",
    "kaindy": "Lake Kaindy",
    "assy-plateau": "Assy plateau",
    "charyn-kolsai-kaindy": "Charyn canyon Valley of Castles",
    "shymbulak-medeu": "Shymbulak ski resort",
    "almaty-mountains": "Trans-Ili Alatau",
}

API = "https://commons.wikimedia.org/w/api.php"
HDRS = {"User-Agent": "AlmatripsSiteBuilder/1.0 (placeholder image fetch)"}


def api(params):
    params = dict(params, format="json")
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=HDRS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def pick(term):
    data = api({
        "action": "query",
        "generator": "search",
        "gsrsearch": f"filetype:bitmap {term}",
        "gsrnamespace": "6",
        "gsrlimit": "12",
        "prop": "imageinfo",
        "iiprop": "url|size|extmetadata",
        "iiurlwidth": "1800",
    })
    pages = (data.get("query") or {}).get("pages") or {}
    best = None
    for p in pages.values():
        info = (p.get("imageinfo") or [{}])[0]
        w, h = info.get("width", 0), info.get("height", 0)
        url = info.get("url", "")
        if not url.lower().endswith((".jpg", ".jpeg")):
            continue
        if w < 1400 or w <= h:  # want large landscape shots
            continue
        score = min(w, 4000)
        if best is None or score > best[0]:
            meta = info.get("extmetadata") or {}
            artist = re.sub(r"<[^>]+>", "", (meta.get("Artist") or {}).get("value", "unknown")).strip()
            lic = (meta.get("LicenseShortName") or {}).get("value", "?")
            best = (score, info.get("thumburl") or url, p.get("title", ""), artist, lic,
                    info.get("descriptionurl", ""))
    return best


def main():
    for slug, term in SEARCHES.items():
        time.sleep(6)
        try:
            best = pick(term)
            if not best:
                print(f"MISS  {slug}  ({term})")
                continue
            _, url, title, artist, lic, page = best
            dest = OUT / f"{slug}.jpg"
            req = urllib.request.Request(url, headers=HDRS)
            with urllib.request.urlopen(req, timeout=60) as r, open(dest, "wb") as f:
                f.write(r.read())
            kb = dest.stat().st_size // 1024
            CREDITS.append(f"- `{slug}.jpg` — {title} by {artist} ({lic}) — {page}")
            print(f"OK    {slug}.jpg  {kb} KB  [{lic}] {title}")
        except Exception as e:
            print(f"FAIL  {slug}: {e}")

    credits = Path(__file__).resolve().parent.parent / "IMAGE_CREDITS.md"
    existing = credits.read_text() if credits.exists() else (
        "# Image credits\n\nPlaceholder photos from Wikimedia Commons — replace with own "
        "photography before/after launch. Attribution required by the licenses below.\n\n"
    )
    credits.write_text(existing + "\n".join(CREDITS) + "\n")
    print("credits written")


if __name__ == "__main__":
    sys.exit(main())
