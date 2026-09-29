# explore-v1

Landing page for **Explore**, GivenGain's new way for charities to ask questions of their fundraising data. Built as a standalone page, to be merged into the main GivenGain site later.

Open `index.html` in a browser, or serve the folder (for example `python3 -m http.server`) and visit `http://localhost:8000`.

## Files

| Path | What it is |
|---|---|
| `index.html` | The page. Sections are marked with `<!-- ===== -->` comments. |
| `css/tokens.css` | Brand colours, type scale, spacing and shape as CSS custom properties. |
| `css/main.css` | Layout and components. Every class is prefixed `gg-` to avoid clashes when merged. |
| `js/main.js` | Header scroll state, section highlighting in the header, example tabs, product demo animation. No dependencies. |
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
| Footer | – | Dark Blue |

## Placeholders to replace

All links are `#` placeholders for now.

**Example screenshots** (in `#examples`): every question shows a screenshot, but they are stand-ins taken from the current product screens, so they don't all match their question yet. Replace each with a screenshot of that exact question:

| Question | Current image |
|---|---|
| Executive summary of the last 90 days | `explore-kpi-summary.jpg` |
| Top 10 fundraisers | `explore-report-table.jpg` |
| This year vs last year | `explore-trend-chart.jpg` |
| Monthly donation trends | `monthly-donation-trends.png` (matches) |
| Donations included in the latest payout | `explore-start.jpg` |
| Unique donors in the last six months | `explore-kpi-summary.jpg` (repeated) |

The screenshots show real figures from the GivenGain Foundation USA account.

**Training video** (in `#learn`): replace the `.gg-placeholder--video` block with the embed or a thumbnail.

## Notes for integration

- **Font:** Figtree is loaded from Google Fonts in the `<head>`. Remove that link if the main site already loads it.
- **Header:** logo only over the hero. Once the page is scrolled it turns blurred Dark Blue and shows a row of section links and a right-aligned **Explore your data** button; the link for the section in view turns yellow with an underline. Below 1180px the section links move to a second row that scrolls sideways. When merging, the section links and button are the page-specific parts.
- **Footer:** recreates the live site's so the page can be reviewed on its own. When merging, use the main site's footer.
- **Product demo:** the interface in `#reporting` is rebuilt in HTML and CSS with sample data for a fictional charity, and is labelled "Sample data for illustration." It plays once when scrolled into view and can be replayed. With reduced motion turned on, it shows the finished state straight away.
- **Buttons:** Yellow for the main action, white outline for everything else. No red buttons.
