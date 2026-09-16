from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "mehmet-utku-mese-cv.pdf"

PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN = 42

INK = HexColor("#07100F")
SURFACE = HexColor("#10231E")
MINT = HexColor("#9AF7DB")
MINT_DARK = HexColor("#247F68")
MUTED = HexColor("#53645F")
LIGHT = HexColor("#E5EFEC")
PAPER = HexColor("#F7FAF9")
WHITE = HexColor("#FFFFFF")

REGULAR_FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"
BOLD_FONT = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

pdfmetrics.registerFont(TTFont("Arial", REGULAR_FONT))
pdfmetrics.registerFont(TTFont("Arial-Bold", BOLD_FONT))


def wrap_text(text, font_name, font_size, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if pdfmetrics.stringWidth(candidate, font_name, font_size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_text(c, text, x, y, width, font="Arial", size=9, leading=13, color=MUTED):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap_text(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def section_title(c, label, y):
    c.setFont("Arial-Bold", 8)
    c.setFillColor(MINT_DARK)
    c.drawString(MARGIN, y, label.upper())
    c.setStrokeColor(LIGHT)
    c.setLineWidth(0.7)
    c.line(MARGIN + 112, y + 2, PAGE_WIDTH - MARGIN, y + 2)
    return y - 22


def role(c, y, title, company, period, summary, bullets):
    c.setFillColor(INK)
    c.setFont("Arial-Bold", 11)
    c.drawString(MARGIN, y, title)
    c.setFont("Arial-Bold", 8)
    c.setFillColor(MINT_DARK)
    period_width = pdfmetrics.stringWidth(period, "Arial-Bold", 8)
    c.drawString(PAGE_WIDTH - MARGIN - period_width, y + 1, period)
    y -= 15

    c.setFont("Arial-Bold", 8.5)
    c.setFillColor(SURFACE)
    c.drawString(MARGIN, y, company)
    y -= 15

    y = draw_text(c, summary, MARGIN, y, PAGE_WIDTH - (MARGIN * 2), size=8.4, leading=11.8)
    y -= 2

    for bullet in bullets:
        c.setFillColor(MINT_DARK)
        c.circle(MARGIN + 2.5, y + 2.7, 1.6, fill=1, stroke=0)
        y = draw_text(
            c,
            bullet,
            MARGIN + 12,
            y,
            PAGE_WIDTH - (MARGIN * 2) - 12,
            size=8.2,
            leading=11.4,
        )
        y -= 1

    return y - 10


def project(c, y, title, meta, description, link=None):
    c.setFillColor(INK)
    c.setFont("Arial-Bold", 11)
    c.drawString(MARGIN, y, title)
    c.setFont("Arial-Bold", 7.5)
    c.setFillColor(MINT_DARK)
    c.drawRightString(PAGE_WIDTH - MARGIN, y + 1, meta.upper())
    y -= 16
    y = draw_text(c, description, MARGIN, y, PAGE_WIDTH - (MARGIN * 2), size=8.4, leading=11.7)
    if link:
        y -= 1
        c.setFont("Arial-Bold", 7.4)
        c.setFillColor(MINT_DARK)
        c.drawString(MARGIN, y, link[0])
        link_width = pdfmetrics.stringWidth(link[0], "Arial-Bold", 7.4)
        c.linkURL(link[1], (MARGIN, y - 2, MARGIN + link_width, y + 9), relative=0)
        y -= 12
    c.setStrokeColor(LIGHT)
    c.line(MARGIN, y, PAGE_WIDTH - MARGIN, y)
    return y - 18


def page_header(c, subtitle, page_number, compact=False):
    header_height = 94 if compact else 160
    c.setFillColor(INK)
    c.rect(0, PAGE_HEIGHT - header_height, PAGE_WIDTH, header_height, fill=1, stroke=0)

    c.setFillColor(MINT)
    c.circle(MARGIN + 13, PAGE_HEIGHT - 39, 13, fill=0, stroke=1)
    c.setFont("Arial-Bold", 7)
    c.drawCentredString(MARGIN + 13, PAGE_HEIGHT - 41.5, "UM")

    title_y = PAGE_HEIGHT - 45
    c.setFont("Arial-Bold", 23 if compact else 28)
    c.setFillColor(WHITE)
    c.drawString(MARGIN + 38, title_y, "Mehmet Utku Meşe")
    c.setFont("Arial-Bold", 8)
    c.setFillColor(MINT)
    c.drawString(MARGIN + 39, title_y - 18, subtitle.upper())

    c.setFont("Arial", 7.2)
    c.setFillColor(HexColor("#B8C8C3"))
    c.drawRightString(PAGE_WIDTH - MARGIN, title_y, f"PAGE {page_number} / 2")

    if not compact:
        details_y = PAGE_HEIGHT - 116
        contact = [
            ("Ankara, Türkiye", None),
            ("utkumese.dev@gmail.com", "mailto:utkumese.dev@gmail.com"),
            ("linkedin.com/in/mehmet-utku-mese", "https://www.linkedin.com/in/mehmet-utku-mese/"),
            ("github.com/Utku-Mese", "https://github.com/Utku-Mese"),
            ("utku-mese.github.io", "https://utku-mese.github.io/"),
        ]
        x = MARGIN
        for index, (label, url) in enumerate(contact):
            c.setFont("Arial", 7.2)
            c.setFillColor(HexColor("#D2DFDB"))
            c.drawString(x, details_y, label)
            label_width = pdfmetrics.stringWidth(label, "Arial", 7.2)
            if url:
                c.linkURL(url, (x, details_y - 2, x + label_width, details_y + 8), relative=0)
            x += label_width + 13
            if index < len(contact) - 1:
                c.setFillColor(MINT_DARK)
                c.circle(x - 6.5, details_y + 2.4, 1.2, fill=1, stroke=0)

    return PAGE_HEIGHT - header_height - 30


def page_footer(c):
    c.setStrokeColor(LIGHT)
    c.line(MARGIN, 32, PAGE_WIDTH - MARGIN, 32)
    c.setFont("Arial", 6.8)
    c.setFillColor(MUTED)
    c.drawString(MARGIN, 20, "Updated September 2026")
    c.drawRightString(PAGE_WIDTH - MARGIN, 20, "MEHMET UTKU MEŞE - SOFTWARE ENGINEER")


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)
    c.setTitle("Mehmet Utku Meşe - Software Engineer CV")
    c.setAuthor("Mehmet Utku Meşe")
    c.setSubject("Software engineering experience, projects and education")

    # Page 1: Profile and experience
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    y = page_header(c, "Software Engineer", 1)

    y = section_title(c, "Profile", y)
    profile = (
        "Software engineer with 4+ years of product development experience across mobile, backend and IPTV systems. "
        "Currently working at NETAŞ on the Tivibu IPTV portal, with a focus on usable interfaces, maintainable architecture "
        "and performance in constrained environments. Experienced in Flutter, native mobile development, JavaScript, Java EE "
        "and service integrations."
    )
    y = draw_text(c, profile, MARGIN, y, PAGE_WIDTH - (MARGIN * 2), size=9, leading=13.2)
    y -= 15

    y = section_title(c, "Experience", y)
    y = role(
        c,
        y,
        "Software Engineer",
        "NETAŞ - Ankara, Türkiye",
        "2025 - PRESENT",
        "Developing the set-top box portal layer of Tivibu IPTV, a large-scale television platform serving live TV, VOD and time-shifted experiences.",
        [
            "Build and maintain portal features including EPG, channel navigation, player controls, search, PPV, parental controls, self-care and messaging.",
            "Integrate HLS/DASH streaming, Widevine and Verimatrix DRM, REST services and ZTE middleware APIs using JSP, Java EE, JavaScript, HTML and CSS.",
            "Improve responsiveness and stability for resource-constrained set-top box hardware.",
        ],
    )
    y = role(
        c,
        y,
        "Software Development Specialist",
        "BDH / NETAŞ ecosystem - İstanbul, Türkiye",
        "2024 - 2025",
        "Delivered enterprise mobile products for field and warehouse teams while contributing to backend services and technical documentation.",
        [
            "Built Flutter and Ionic workflows for work orders, inventory, barcode printing, cargo acceptance and operational tracking.",
            "Applied GetX, BLoC, MVC/MVVM, REST APIs and ZPL integrations across Zebra devices and printers.",
        ],
    )
    y = role(
        c,
        y,
        "Mobile Developer Intern",
        "Intellium - İstanbul, Türkiye",
        "JUL - SEP 2024",
        "Rebuilt an internal web portal as a cross-platform Flutter application released for Android and iOS.",
        [
            "Integrated .NET REST services with GetX state management and served as Scrum Master during the final sprint cycle.",
        ],
    )

    y = section_title(c, "Core toolkit", y + 2)
    tool_rows = [
        ("PRODUCT & MOBILE", "Flutter, Dart, Kotlin, Swift/SwiftUI, React, Material Design"),
        ("TV & WEB", "JavaScript, JSP, Java EE, HTML/CSS, HLS/DASH, Widevine, Verimatrix"),
        ("SERVICES & DATA", "Spring Boot, Node.js, REST APIs, WebSocket, MongoDB, Firebase, SQL"),
        ("PRACTICES", "Clean Architecture, SOLID, MVC/MVVM, BLoC, GetX, Scrum, Git"),
    ]
    col_width = (PAGE_WIDTH - (MARGIN * 2) - 18) / 2
    for index, (label, value) in enumerate(tool_rows):
        col = index % 2
        row = index // 2
        x = MARGIN + col * (col_width + 18)
        row_y = y - row * 38
        c.setFont("Arial-Bold", 7)
        c.setFillColor(MINT_DARK)
        c.drawString(x, row_y, label)
        draw_text(c, value, x, row_y - 12, col_width, size=7.7, leading=10.2)

    page_footer(c)
    c.showPage()

    # Page 2: Selected work, education and recognition
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    y = page_header(c, "Selected work & background", 2, compact=True)

    y = section_title(c, "Selected projects", y)
    y = project(
        c,
        y,
        "Naviscope",
        "Flutter / GNSS / Open source",
        "A mobile location-health dashboard that visualizes fix status, accuracy, satellite signal strength, skyplot geometry and live telemetry. Android combines native GNSS data with fused location flows; iOS uses CoreLocation within platform limits.",
        ("github.com/Utku-Mese/naviscope", "https://github.com/Utku-Mese/naviscope"),
    )
    y = project(
        c,
        y,
        "Bisevk (formerly Yükümü Al)",
        "Flutter / Spring Boot / Logistics",
        "A mobile and web freight marketplace connecting load owners and carriers. The product supports listings, offers, messaging, notifications, location flows and scalable REST/WebSocket integrations using Flutter, BLoC, React, Kotlin, Spring Boot and MongoDB.",
        ("View on the App Store", "https://apps.apple.com/fi/app/bisevk/id6751422750"),
    )
    y = project(
        c,
        y,
        "Emptor Mobile",
        "Enterprise mobile",
        "A modular field-operations product for work orders, inventory requests and process tracking. Contributed to modernizing the Ionic application into Flutter with GetX, REST APIs, ZPL support and maintainable MVC-based modules.",
    )
    y = project(
        c,
        y,
        "BoxCoder & Cargo Acceptance",
        "Industrial tooling",
        "Flutter applications for warehouse operations: bulk barcode printing over Bluetooth to Zebra printers, camera/device scanning, delivery documentation, product sorting, history tracking and operational expense flows.",
    )
    y = project(
        c,
        y,
        "Portal Intellium Mobile",
        "Android & iOS",
        "A mobile adaptation of an internal company portal, built from the ground up with Flutter, GetX, REST APIs and a .NET backend, then delivered across Android and iOS.",
    )

    y -= 2
    y = section_title(c, "Education & recognition", y)
    column_gap = 26
    column_width = (PAGE_WIDTH - (MARGIN * 2) - column_gap) / 2

    left_x = MARGIN
    right_x = MARGIN + column_width + column_gap

    c.setFont("Arial-Bold", 10)
    c.setFillColor(INK)
    c.drawString(left_x, y, "B.Sc. Software Engineering")
    c.setFont("Arial-Bold", 8)
    c.setFillColor(MINT_DARK)
    c.drawString(left_x, y - 15, "FIRAT UNIVERSITY - 2021 - 2025")
    draw_text(c, "GPA: 3.27 / 4.00", left_x, y - 30, column_width, size=8.2)

    c.setFont("Arial-Bold", 10)
    c.setFillColor(INK)
    c.drawString(right_x, y, "NASA Space Apps Challenge")
    c.setFont("Arial-Bold", 8)
    c.setFillColor(MINT_DARK)
    c.drawString(right_x, y - 15, "2022 WINNER")
    draw_text(c, "Won first place with the team project Wink To The Future.", right_x, y - 30, column_width, size=8.2, leading=11.2)

    y -= 76
    y = section_title(c, "Community & credentials", y)
    community_items = [
        "Core Team Member - GDG & WTM Elazığ",
        "Agile Methodologies and Scrum - BTK Akademi, 2023",
        "Flutter Bootcamp - GDG & WTM Elazığ, 2022",
        "Machine Learning Study Jams - GDG & WTM Elazığ, 2022",
        "English - B1",
    ]
    for index, item in enumerate(community_items):
        item_x = left_x if index % 2 == 0 else right_x
        item_y = y - (index // 2) * 24
        c.setFillColor(MINT_DARK)
        c.circle(item_x + 2.5, item_y + 2.6, 1.6, fill=1, stroke=0)
        draw_text(c, item, item_x + 12, item_y, column_width - 12, size=8.2, leading=11)

    page_footer(c)
    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
