# Google Search Title and SEO Audit

**Audit date:** 2026-10-17  
**Preferred canonical domain:** `https://www.bionicsenvirotech.com`  
**Brand:** `Bionics Enviro Tech`  
**Routing architecture:** Next.js App Router

## 1. Root cause

The main issue was inconsistent metadata generation rather than one universally duplicated title:

- The root layout declared a `%s | Bionics Enviro Tech` title template, but the shared `createMetadata` helper returned `title.absolute`. That bypassed the template. Most callers compensated by manually appending the brand, while generated blog article titles did not, so those pages emitted unbranded titles.
- Other routes used titles containing the brand as ordinary child titles, risking a second brand from the layout template.
- The homepage needed an intentional absolute title to keep the requested brand-first wording at the root route.
- `/products/buy` emitted `<title>`, description, canonical, Open Graph, and Twitter tags directly from its client component instead of using Next.js metadata. It had no route metadata export, creating a second metadata source.
- The shared helper truncated titles to 60 characters, sometimes cutting off useful phrases and creating collisions after truncation.
- Google can also select different title links for two independently indexed domains. Live checks confirmed that `bionicsenviro.com` is a separate, active WordPress site with a self-canonical; it is not redirected to the preferred domain.

## 2. Existing metadata configuration

- Root metadata and the title template are in `src/app/layout.tsx`; shared title, description, canonical, Open Graph, and Twitter generation is in `src/lib/site.ts`.
- Page metadata uses the App Router `metadata` export or `generateMetadata`. Product and industry details are statically generated from their existing route data.
- `siteConfig.url` already used the preferred `https://www.bionicsenvirotech.com` origin. The sitemap and `robots.txt` also derive their host from this setting.
- `next.config.mjs` contains path redirects only; it does not redirect either domain or host variant.
- Before this change, most shared metadata callers provided titles with the brand already included. Dynamic blog titles were the important exception. Some routes also used direct metadata and route-level JSX tags rather than the shared helper.

## 3. Changes made

- Set a descriptive root default and standardized child titles on `%s | Bionics Enviro Tech`.
- Updated `createMetadata` to accept page-only titles, append the brand once in the resulting title/Open Graph/Twitter values, and preserve full meaningful titles instead of truncating at 60 characters.
- Used one explicit absolute title for the homepage: `Bionics Enviro Tech | Nanozyme Bioculture Manufacturer`.
- Removed manually appended brand names from shared-helper title inputs. Blog article titles now retain their complete article title and receive the brand suffix.
- Set the aerobic and anaerobic product titles to `Aerobic Bioculture` and `Anaerobic Bioculture`, respectively, while retaining their page-specific descriptions and keyword data.
- Renamed the FAQ title to avoid collision with a similarly prefixed blog title.
- Moved the order page's manually rendered title/meta tags into `src/app/products/buy/layout.tsx`, preserving its title, description, keywords, canonical, Open Graph and Twitter metadata.
- Added the existing indexable executive-director route to the XML sitemap; no page or URL was created or changed.
- Normalized the not-found and maintenance titles so the root template does not add a duplicate brand. Their intended noindex behavior remains.
- Reused the existing Organization and WebSite entity IDs in related structured data. The homepage Organization uses the exact brand, preferred URL, and existing `/logo.png`; the WebSite references that Organization. Removed a redundant Organization definition from Careers.
- Preserved the existing canonical domain, existing routes, layout/design, and forms. No production, DNS, hosting, or deployment settings were changed.

## 4. Before-and-after title examples

| Route | Before | After |
|---|---|---|
| `/` | Nanozyme Bioculture Manufacturer &#124; Bionics Enviro Tech | Bionics Enviro Tech &#124; Nanozyme Bioculture Manufacturer |
| `/products/aerobic-bioculture` | Aerobic Bioculture Manufacturer &#124; Bionics Enviro Tech | Aerobic Bioculture &#124; Bionics Enviro Tech |
| `/products/anaerobic-bioculture` | Anaerobic Digester Culture &#124; Bionics Enviro Tech | Anaerobic Bioculture &#124; Bionics Enviro Tech |
| `/blogs/bioculture-for-wastewater-treatment` | Article title, clipped to 60 characters and emitted without the brand | Bioculture for Wastewater Treatment: A Practical Guide to Better Plant Performance &#124; Bionics Enviro Tech |
| `/case-studies` | Industrial Wastewater Case Studies &#124; Bionics | Industrial Wastewater Case Studies &#124; Bionics Enviro Tech |
| `/faqs` | Bioculture for Wastewater Treatment FAQs &#124; Bionics Enviro Tech (the shared helper could truncate it) | ETP and STP Bioculture FAQs &#124; Bionics Enviro Tech |
| `/products/buy` | Title and social metadata rendered from JSX in a client component | Buy Wastewater Bioculture &#124; Bionics Enviro Tech from route metadata |

The route table below reports the **current generated title from the final local production build** and the corresponding proposed title. They match because the proposed metadata has been implemented. The primary keyword is the first keyword configured for the route.

## 5. Complete indexable-route audit

All canonical URLs below use the preferred HTTPS `www` host. Every listed route is indexable, has one unique title and one unique meta description in the rendered build, and has the brand template applied except for the intentionally absolute homepage title.

There is no standalone `/contact` route: contact information and the enquiry section are part of the homepage (`/#contact`). No separate page or URL was created.

| URL path | Current generated title | Proposed title | Primary keyword | Canonical URL | Template adds brand? | Change |
|---|---|---|---|---|---|---|
| `/` | Bionics Enviro Tech &#124; Nanozyme Bioculture Manufacturer | Bionics Enviro Tech &#124; Nanozyme Bioculture Manufacturer | Scientific Bioculture Manufacturer | `https://www.bionicsenvirotech.com` | No—absolute homepage title | Done |
| `/bioculture-manufacturer-in-india` | Bioculture Manufacturer in India &#124; Bionics Enviro Tech | Bioculture Manufacturer in India &#124; Bionics Enviro Tech | Bioculture Manufacturer in India | `https://www.bionicsenvirotech.com/bioculture-manufacturer-in-india` | Yes | Done |
| `/company/executive-director` | Dr. M. Parameswari Sasikumar &#124; Bionics Enviro Tech | Dr. M. Parameswari Sasikumar &#124; Bionics Enviro Tech | Dr M Parameswari Sasikumar | `https://www.bionicsenvirotech.com/company/executive-director` | Yes | Done; added to XML sitemap |
| `/products/aerobic-bioculture` | Aerobic Bioculture &#124; Bionics Enviro Tech | Aerobic Bioculture &#124; Bionics Enviro Tech | Aerobic Bioculture Manufacturer | `https://www.bionicsenvirotech.com/products/aerobic-bioculture` | Yes | Done |
| `/products/anaerobic-bioculture` | Anaerobic Bioculture &#124; Bionics Enviro Tech | Anaerobic Bioculture &#124; Bionics Enviro Tech | Anaerobic Bioculture | `https://www.bionicsenvirotech.com/products/anaerobic-bioculture` | Yes | Done |
| `/products/stp-bioculture` | STP Bioculture &#124; Bionics Enviro Tech | STP Bioculture &#124; Bionics Enviro Tech | STP Bioculture | `https://www.bionicsenvirotech.com/products/stp-bioculture` | Yes | Done |
| `/products/etp-bioculture` | ETP Bioculture &#124; Bionics Enviro Tech | ETP Bioculture &#124; Bionics Enviro Tech | ETP Bioculture | `https://www.bionicsenvirotech.com/products/etp-bioculture` | Yes | Done |
| `/products/sugar-distillery-bioculture` | Sugar Industry ETP Culture &#124; Bionics Enviro Tech | Sugar Industry ETP Culture &#124; Bionics Enviro Tech | Sugar Industry ETP | `https://www.bionicsenvirotech.com/products/sugar-distillery-bioculture` | Yes | Done |
| `/products/organic-compost-culture` | Organic Composting Culture &#124; Bionics Enviro Tech | Organic Composting Culture &#124; Bionics Enviro Tech | Composting Culture | `https://www.bionicsenvirotech.com/products/organic-compost-culture` | Yes | Done |
| `/products` | Nanozyme Bioculture Products &#124; Bionics Enviro Tech | Nanozyme Bioculture Products &#124; Bionics Enviro Tech | Nanozyme Bioculture Products | `https://www.bionicsenvirotech.com/products` | Yes | Done |
| `/products/buy` | Buy Wastewater Bioculture &#124; Bionics Enviro Tech | Buy Wastewater Bioculture &#124; Bionics Enviro Tech | buy bioculture | `https://www.bionicsenvirotech.com/products/buy` | Yes | Done; JSX metadata removed |
| `/industries` | Industrial Wastewater Treatment Industries &#124; Bionics Enviro Tech | Industrial Wastewater Treatment Industries &#124; Bionics Enviro Tech | Industrial Wastewater Treatment | `https://www.bionicsenvirotech.com/industries` | Yes | Done |
| `/industries/textile-industry-wastewater-treatment` | Textile Industry Wastewater Treatment &#124; Bionics Enviro Tech | Textile Industry Wastewater Treatment &#124; Bionics Enviro Tech | Textile Industry Wastewater Treatment | `https://www.bionicsenvirotech.com/industries/textile-industry-wastewater-treatment` | Yes | Done |
| `/industries/dye-processing-industry-wastewater-treatment` | Dye Processing Industry Wastewater Treatment &#124; Bionics Enviro Tech | Dye Processing Industry Wastewater Treatment &#124; Bionics Enviro Tech | Dye Processing Industry Wastewater Treatment | `https://www.bionicsenvirotech.com/industries/dye-processing-industry-wastewater-treatment` | Yes | Done |
| `/industries/sugar-industry-wastewater-treatment` | Sugar Industry Wastewater Treatment &#124; Bionics Enviro Tech | Sugar Industry Wastewater Treatment &#124; Bionics Enviro Tech | Sugar Industry Wastewater Treatment | `https://www.bionicsenvirotech.com/industries/sugar-industry-wastewater-treatment` | Yes | Done |
| `/industries/distillery-industry-wastewater-treatment` | Distillery Industry Wastewater Treatment &#124; Bionics Enviro Tech | Distillery Industry Wastewater Treatment &#124; Bionics Enviro Tech | Distillery Industry Wastewater Treatment | `https://www.bionicsenvirotech.com/industries/distillery-industry-wastewater-treatment` | Yes | Done |
| `/industries/chemical-industry-wastewater-treatment` | Chemical Industry Wastewater Treatment &#124; Bionics Enviro Tech | Chemical Industry Wastewater Treatment &#124; Bionics Enviro Tech | Chemical Industry Wastewater Treatment | `https://www.bionicsenvirotech.com/industries/chemical-industry-wastewater-treatment` | Yes | Done |
| `/industries/pharmaceutical-industry-wastewater-treatment` | Pharmaceutical Industry Wastewater Treatment &#124; Bionics Enviro Tech | Pharmaceutical Industry Wastewater Treatment &#124; Bionics Enviro Tech | Pharmaceutical Industry Wastewater Treatment | `https://www.bionicsenvirotech.com/industries/pharmaceutical-industry-wastewater-treatment` | Yes | Done |
| `/industries/paper-and-pulp-industry-wastewater-treatment` | Paper and Pulp Industry Wastewater Treatment &#124; Bionics Enviro Tech | Paper and Pulp Industry Wastewater Treatment &#124; Bionics Enviro Tech | Paper and Pulp Industry Wastewater Treatment | `https://www.bionicsenvirotech.com/industries/paper-and-pulp-industry-wastewater-treatment` | Yes | Done |
| `/industries/food-processing-industry-wastewater-treatment` | Food Processing Industry Wastewater Treatment &#124; Bionics Enviro Tech | Food Processing Industry Wastewater Treatment &#124; Bionics Enviro Tech | Food Processing Industry Wastewater Treatment | `https://www.bionicsenvirotech.com/industries/food-processing-industry-wastewater-treatment` | Yes | Done |
| `/industries/dairy-processing-industry-wastewater-treatment` | Dairy Processing Industry Wastewater Treatment &#124; Bionics Enviro Tech | Dairy Processing Industry Wastewater Treatment &#124; Bionics Enviro Tech | Dairy Processing Industry Wastewater Treatment | `https://www.bionicsenvirotech.com/industries/dairy-processing-industry-wastewater-treatment` | Yes | Done |
| `/industries/municipal-solid-waste-composting` | Municipal Solid Waste Composting &#124; Bionics Enviro Tech | Municipal Solid Waste Composting &#124; Bionics Enviro Tech | Municipal Solid Waste Composting | `https://www.bionicsenvirotech.com/industries/municipal-solid-waste-composting` | Yes | Done |
| `/industries/sewage-treatment-plant-stp` | Sewage Treatment Plant &#124; Bionics Enviro Tech | Sewage Treatment Plant &#124; Bionics Enviro Tech | Sewage Treatment Plant | `https://www.bionicsenvirotech.com/industries/sewage-treatment-plant-stp` | Yes | Done |
| `/industries/effluent-treatment-plant-etp` | Effluent Treatment Plant &#124; Bionics Enviro Tech | Effluent Treatment Plant &#124; Bionics Enviro Tech | Effluent Treatment Plant | `https://www.bionicsenvirotech.com/industries/effluent-treatment-plant-etp` | Yes | Done |
| `/industries/cetp` | CETP &#124; Bionics Enviro Tech | CETP &#124; Bionics Enviro Tech | CETP | `https://www.bionicsenvirotech.com/industries/cetp` | Yes | Done |
| `/blogs` | Wastewater Treatment Blog &#124; Bionics Enviro Tech | Wastewater Treatment Blog &#124; Bionics Enviro Tech | Wastewater Treatment | `https://www.bionicsenvirotech.com/blogs` | Yes | Done |
| `/blogs/what-is-bioculture-in-wastewater-treatment` | What Is Bioculture in Wastewater Treatment? &#124; Bionics Enviro Tech | What Is Bioculture in Wastewater Treatment? &#124; Bionics Enviro Tech | what is bioculture | `https://www.bionicsenvirotech.com/blogs/what-is-bioculture-in-wastewater-treatment` | Yes | Done |
| `/blogs/bioculture-for-effluent-treatment-plant-etp` | Bioculture for Effluent Treatment Plant (ETP) Operation &#124; Bionics Enviro Tech | Bioculture for Effluent Treatment Plant (ETP) Operation &#124; Bionics Enviro Tech | bioculture for ETP | `https://www.bionicsenvirotech.com/blogs/bioculture-for-effluent-treatment-plant-etp` | Yes | Done |
| `/blogs/bioculture-for-sewage-treatment-plant-stp` | Bioculture for Sewage Treatment Plant (STP) Performance &#124; Bionics Enviro Tech | Bioculture for Sewage Treatment Plant (STP) Performance &#124; Bionics Enviro Tech | bioculture for STP | `https://www.bionicsenvirotech.com/blogs/bioculture-for-sewage-treatment-plant-stp` | Yes | Done |
| `/blogs/aerobic-vs-anaerobic-bacteria-culture` | Aerobic vs Anaerobic Bacteria Culture for Wastewater Treatment &#124; Bionics Enviro Tech | Aerobic vs Anaerobic Bacteria Culture for Wastewater Treatment &#124; Bionics Enviro Tech | aerobic bacteria culture | `https://www.bionicsenvirotech.com/blogs/aerobic-vs-anaerobic-bacteria-culture` | Yes | Done |
| `/blogs/bacteria-in-wastewater-treatment` | How Beneficial Bacteria Work in Wastewater Treatment &#124; Bionics Enviro Tech | How Beneficial Bacteria Work in Wastewater Treatment &#124; Bionics Enviro Tech | bacteria in wastewater treatment | `https://www.bionicsenvirotech.com/blogs/bacteria-in-wastewater-treatment` | Yes | Done |
| `/blogs/nanozyme-microbial-culture-industrial-wastewater` | Nanozyme Microbial Culture for Industrial Wastewater Treatment &#124; Bionics Enviro Tech | Nanozyme Microbial Culture for Industrial Wastewater Treatment &#124; Bionics Enviro Tech | Nanozyme microbial culture | `https://www.bionicsenvirotech.com/blogs/nanozyme-microbial-culture-industrial-wastewater` | Yes | Done |
| `/blogs/septic-tank-bacteria-culture-guide` | Septic Tank Bacteria Culture: Use, Limits and Maintenance &#124; Bionics Enviro Tech | Septic Tank Bacteria Culture: Use, Limits and Maintenance &#124; Bionics Enviro Tech | septic tank bacteria | `https://www.bionicsenvirotech.com/blogs/septic-tank-bacteria-culture-guide` | Yes | Done |
| `/blogs/bioculture-for-wastewater-treatment` | Bioculture for Wastewater Treatment: A Practical Guide to Better Plant Performance &#124; Bionics Enviro Tech | Bioculture for Wastewater Treatment: A Practical Guide to Better Plant Performance &#124; Bionics Enviro Tech | Bioculture | `https://www.bionicsenvirotech.com/blogs/bioculture-for-wastewater-treatment` | Yes | Done |
| `/blogs/why-bioculture-is-best-for-wastewater-treatment` | Why Bioculture Is the Ultimate Solution for Sustainable Wastewater Treatment &#124; Bionics Enviro Tech | Why Bioculture Is the Ultimate Solution for Sustainable Wastewater Treatment &#124; Bionics Enviro Tech | Sustainable Treatment | `https://www.bionicsenvirotech.com/blogs/why-bioculture-is-best-for-wastewater-treatment` | Yes | Done |
| `/blogs/top-5-mistakes-etp-stp-operation` | Top 5 Mistakes in ETP and STP Plant Operation and How to Avoid Them &#124; Bionics Enviro Tech | Top 5 Mistakes in ETP and STP Plant Operation and How to Avoid Them &#124; Bionics Enviro Tech | ETP | `https://www.bionicsenvirotech.com/blogs/top-5-mistakes-etp-stp-operation` | Yes | Done |
| `/blogs/complete-guide-to-bioculture-solutions` | Complete Guide to Bioculture Solutions for Industrial Wastewater Treatment &#124; Bionics Enviro Tech | Complete Guide to Bioculture Solutions for Industrial Wastewater Treatment &#124; Bionics Enviro Tech | Nanozyme | `https://www.bionicsenvirotech.com/blogs/complete-guide-to-bioculture-solutions` | Yes | Done |
| `/careers` | Careers &#124; Bionics Enviro Tech | Careers &#124; Bionics Enviro Tech | Environmental Biotechnology Careers | `https://www.bionicsenvirotech.com/careers` | Yes | Done |
| `/testimonials` | Industrial Client Testimonials &#124; Bionics Enviro Tech | Industrial Client Testimonials &#124; Bionics Enviro Tech | Nanozyme testimonials | `https://www.bionicsenvirotech.com/testimonials` | Yes | Done |
| `/case-studies` | Industrial Wastewater Case Studies &#124; Bionics Enviro Tech | Industrial Wastewater Case Studies &#124; Bionics Enviro Tech | wastewater treatment case studies | `https://www.bionicsenvirotech.com/case-studies` | Yes | Done |
| `/downloads` | Wastewater Treatment Brochures & Downloads &#124; Bionics Enviro Tech | Wastewater Treatment Brochures & Downloads &#124; Bionics Enviro Tech | wastewater treatment brochure | `https://www.bionicsenvirotech.com/downloads` | Yes | Done |
| `/faqs` | ETP and STP Bioculture FAQs &#124; Bionics Enviro Tech | ETP and STP Bioculture FAQs &#124; Bionics Enviro Tech | what is bioculture | `https://www.bionicsenvirotech.com/faqs` | Yes | Done |
| `/awards` | Awards and Certifications &#124; Bionics Enviro Tech | Awards and Certifications &#124; Bionics Enviro Tech | Bionics awards | `https://www.bionicsenvirotech.com/awards` | Yes | Done |
| `/sitemap` | Website Sitemap &#124; Bionics Enviro Tech | Website Sitemap &#124; Bionics Enviro Tech | Bionics Enviro Tech sitemap | `https://www.bionicsenvirotech.com/sitemap` | Yes | Done |
| `/search` | Search Products and Resources &#124; Bionics Enviro Tech | Search Products and Resources &#124; Bionics Enviro Tech | Bionics search | `https://www.bionicsenvirotech.com/search` | Yes | Done |
| `/privacy-policy` | Privacy Policy &#124; Bionics Enviro Tech | Privacy Policy &#124; Bionics Enviro Tech | Privacy Policy | `https://www.bionicsenvirotech.com/privacy-policy` | Yes | Done |
| `/terms-and-conditions` | Terms and Conditions &#124; Bionics Enviro Tech | Terms and Conditions &#124; Bionics Enviro Tech | Terms and Conditions | `https://www.bionicsenvirotech.com/terms-and-conditions` | Yes | Done |
| `/cookie-policy` | Cookie Policy &#124; Bionics Enviro Tech | Cookie Policy &#124; Bionics Enviro Tech | Cookie Policy | `https://www.bionicsenvirotech.com/cookie-policy` | Yes | Done |
| `/disclaimer` | Disclaimer &#124; Bionics Enviro Tech | Disclaimer &#124; Bionics Enviro Tech | Disclaimer | `https://www.bionicsenvirotech.com/disclaimer` | Yes | Done |
| `/refund-policy` | Refund Policy &#124; Bionics Enviro Tech | Refund Policy &#124; Bionics Enviro Tech | Refund Policy | `https://www.bionicsenvirotech.com/refund-policy` | Yes | Done |
| `/shipping-policy` | Shipping Policy &#124; Bionics Enviro Tech | Shipping Policy &#124; Bionics Enviro Tech | Shipping Policy | `https://www.bionicsenvirotech.com/shipping-policy` | Yes | Done |

## 6. Canonical and domain findings

- The repository consistently uses `https://www.bionicsenvirotech.com` for generated canonical URLs, Open Graph URLs, sitemap entries, robots sitemap location, and the main structured-data entities.
- Internal navigation is route-relative. `next.config.mjs` has existing path redirects only; there are no HTTP/HTTPS, `www`/non-`www`, or cross-domain redirects in this project.
- Live check on 2026-10-17: `https://www.bionicsenviro.com/` returned a WordPress page with canonical `https://www.bionicsenviro.com/`. Its tested `/products/aerobic-bioculture` path resolved to that same domain's homepage, not to `bionicsenvirotech.com`.
- The `.com` domain is therefore an active separate site/legacy property, not a domain redirected by this Next.js project. No redirect was added. Consolidation would require confirming ownership and business intent, then mapping old URLs to relevant `.tech` destinations and configuring a redirect on the system serving `.com`.
- `info@bionicsenviro.com` remains in the site configuration as a contact address; it is not used to construct canonical or page URLs and was not changed.

## 7. Structured data findings

- The existing homepage graph now identifies the Organization as `Bionics Enviro Tech`, with `@id` `https://www.bionicsenvirotech.com/#organization`, URL `https://www.bionicsenvirotech.com`, and the existing logo at `https://www.bionicsenvirotech.com/logo.png`.
- The WebSite entity uses the same preferred URL and exact brand name, has a stable `#website` ID, and references the Organization as publisher.
- Existing Product, Service, JobPosting, Article, and page schemas reference the stable organization/site entities where appropriate. No new Organization or WebSite entity was added.
- The local production build's 139 JSON-LD script blocks all parsed as valid JSON. No reviews, ratings, certifications, or other claims were added.

## 8. Build and validation

- `npm run lint -- --quiet`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; Next.js generated the App Router production build.
- Rendered local production HTML audit: all 51 XML-sitemap routes had one unique title and one unique meta description; each title contained the brand exactly once; all canonicals matched the route and preferred HTTPS host; Open Graph titles/URLs matched; no sitemap route had `noindex`; all JSON-LD parsed successfully.
- `robots.txt` advertises `https://www.bionicsenvirotech.com/sitemap.xml`.
- `git diff --check`: passed (Git emitted line-ending normalization warnings for existing LF files only).
- No UI redesign was made. The order form's application component and form logic were preserved; only its inline SEO tags were removed in favor of route metadata.

## 9. Remaining work before/after deployment

- Nothing was deployed, pushed, committed, or changed in DNS/hosting.
- After the approved release, inspect both verified domain properties in Google Search Console. Resubmit the `.tech` sitemap, inspect the homepage and important product/industry URLs, and request recrawling as appropriate.
- If `.com` is intended to be retired, confirm that with the domain/site owner before proposing or configuring URL-by-URL permanent redirects. The Next.js repository cannot control redirects for the separate WordPress site.
- Google may rewrite title links using page headings, links, and other signals; these fixes make the site's emitted metadata consistent but cannot guarantee the exact title shown in every search result.
