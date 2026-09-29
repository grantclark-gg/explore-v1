# explore-v1

Landing page for **Explore**, GivenGain's new way for charities to ask questions of their fundraising data. Built as a standalone page, to be merged into the main GivenGain site later.

Open `index.html` in a browser, or serve the folder (for example `python3 -m http.server`) and visit `http://localhost:8000`.

## Files

| Path | What it is |
|---|---|
| `index.html` | The page. Sections are marked with `<!-- ===== -->` comments. |
| `css/tokens.css` | Brand colours, type scale, spacing and shape as CSS custom properties. |
| `css/main.css` | Layout and components. Every class is prefixed `gg-` to avoid clashes when merged. |
| `js/main.js` | Header scroll state, example tabs, product demo animation. No dependencies. |
| `assets/` | Logo (white and dark blue SVG), hero photo, product screenshots. |

## Page structure

| Section | `id` | Background |
|---|---|---|
| Hero | – | Photo with Dark Blue overlay |
| Reporting on your terms (animated product demo) | `reporting` | White |
| What can you explore? (question tabs) | `examples` | Lavender |
| Foundation + flexibility (Statements vs Explore) | `statements` | White |
| How to get the best results | `best-results` | Lavender |
| Built around your GivenGain data | `security` | Dark Blue |
| Learn Explore | `learn` | Lavender |
| FAQ | `faq` | White |
| Final call to action | – | Dark Blue to coral gradient |
| Footer | – | Dark Blue |

## Placeholders to replace

All links are `#` placeholders for now.

**Screenshots needed** (in `#examples`; each is a `.gg-placeholder` block):

1. Executive summary of the last 90 days – written summary with KPI tiles
2. Top 10 fundraisers – table
3. This year vs last year – bar chart
4. Donations included in the latest payout – table
5. Unique donors in the last six months – KPI tile

"Monthly donation trends" already uses `assets/screens/monthly-donation-trends.png`, cropped from the product screenshots.

**Training video** (in `#learn`): replace the `.gg-placeholder--video` block with the embed or a thumbnail.

## Notes for integration

- **Font:** Figtree is loaded from Google Fonts in the `<head>`. Remove that link if the main site already loads it.
- **Header:** logo only for now. It is transparent over the hero and turns blurred Dark Blue once the page is scrolled. When merging, use the main site's header.
- **Footer:** recreates the live site's so the page can be reviewed on its own. When merging, use the main site's footer.
- **Product demo:** the interface in `#reporting` is rebuilt in HTML and CSS with sample data for a fictional charity, and is labelled "Sample data for illustration." It plays once when scrolled into view and can be replayed. With reduced motion turned on, it shows the finished state straight away.
- **Buttons:** Yellow for the main action, white outline for everything else. No red buttons.
