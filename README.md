# City Nooks 🏡

**CSC318H1S: The Design of Interactive Computational Media**

An interactive prototype for a Toronto-focused "third place" finder app — helping people discover comfortable, welcoming spaces beyond home and work.

**Group:** Side Quest Society

**Members:** Julie Sun (Zhu Xin), Allyssa Chiu, Alisa Iskakova, Manahill Sajid, Eric Yu

---

## How to Access the Prototype

**Live URL:** [https://alisa-isk.github.io/city-nooks/](https://alisa-isk.github.io/city-nooks/)

No installation required — just open the link in any browser. The prototype is optimized for mobile viewport but works on desktop too (displayed as a phone frame).

**Demo Account:** If you don't want to create an account, use:
- **Email:** `demo@mail.com`
- **Password:** `demo`

**Friend Search:** To see the friend search functionality, search for any group member's name (Julie Sun, Allyssa Chiu, Alisa Iskakova, Manahill Sajid, Eric Yu).

To run locally:
```bash
npm install
npm run dev
```

---

## Core Functionality & Supported Tasks

- **Discover third places** — Browse a curated feed of 10 real Toronto locations (cafés, libraries, parks, studios, gyms) with photos, ratings, tags, and descriptions
- **Search & filter** — Filter by vibe, distance, type, and amenities; search by name
- **View place details** — See community ratings, "Best For" breakdowns, amenities, and a "What to Expect" section with house rules and social norms
- **Check in** — Check in to a place to contribute to real-time activity data, with an undo option
- **Review & rate** — Write context-aware reviews with dot-scale ratings for noise, crowd, and energy levels
- **Map view** — Explore places on a Toronto street map with interactive pins and inline search/filter
- **Friends & community** — View a friends feed with reviews and check-ins, manage friend lists, accept/decline requests, and search for new friends
- **Save places** — Bookmark places to "Favorites" (heart) or "Want to Go" (bookmark) lists
- **Preference quiz** — A 5-step onboarding quiz that tailors recommendations to your role, timing, vibe, goals, and distance preferences
- **Account & privacy** — Full settings for profile, privacy controls (location sharing, check-in visibility, friend request toggles), notification preferences, and a searchable FAQ

---

## Alignment with G1 Job Stories & Design Requirements

### Job Stories

| # | Job Story | How the Prototype Addresses It |
|---|-----------|-------------------------------|
| 1 | **Space availability and capacity assurance** | Each place detail page includes a "Current Activity" busy meter showing simulated live check-in counts with a color-coded bar (Quiet → Moderate → Busy). Dot-scale ratings for noise and crowd levels in reviews give users further confidence about what to expect. |
| 2 | **Post-work/school energy conservation** | The preference quiz asks when users need a spot and how far they'll go. Distance filters, proximity sorting on the home feed, and "Close to transit" tags help fatigued users find easy-to-reach places nearby. |
| 3 | **Minimize social anxiety by creating social norm predictability** | The "What to Expect" section on every place provides house rules and social norms (e.g., "💻 Laptop-friendly", "☕ Buy a drink to sit", "🤫 Quiet zone enforced"). Community dot-scale ratings, photo previews, and the busy meter all reduce uncertainty before visiting. |
| 4 | **Foster community re-connection** | The Friends tab includes a feed of friends' reviews and check-ins with comments and likes. Users can find and add friends, see who's checked in at a place, and the quiz includes community-oriented goals like "To find and meet friends" and "A sense of community." |
| 5 | **Allow focus without social pressure** | Noise and crowd dot-scale ratings, a "Quiet & focused" vibe filter, and the real-time busy meter help users identify low-pressure spaces where they can work or study without feeling socially obligated. |

### Design Requirements

| Requirement | Implementation |
|-------------|---------------|
| **R1:** Real-time capacity and facility availability | Current Activity busy meter with check-in counts and color-coded status bar on every place detail page |
| **R2:** Nearby, easy-to-reach suggestions for fatigued users | Distance displayed on every card, distance-based filtering, quiz captures preferred travel range |
| **R3:** Clarify social rules and venue expectations | "What to Expect" box with emoji-coded house rules on every place (e.g., laptop policies, noise expectations, dress codes) |
| **R4:** Help people find community through activities | Friends feed with check-ins and reviews, friend discovery search, quiz goal "To find and meet friends", activity-based place tags |
| **R5:** Indicate social density for individual focus | Busy meter, noise/crowd dot-scale ratings in reviews, "Quiet & focused" vibe filter option |

---

## Design Decisions & Tradeoffs (G2)

- **Session-only data:** The prototype resets on reload — all check-ins, reviews, and favorites are stored in React state rather than a backend. This was a deliberate tradeoff to keep the prototype lightweight and focused on demonstrating interaction patterns rather than persistence.
- **Simulated real-time data:** The busy meter uses a deterministic formula based on place ID to simulate check-in counts. In a production version, this would pull from actual user check-ins.
- **Static map:** The map view uses a hand-drawn SVG of Toronto streets rather than real map tiles. This avoids API dependencies while still demonstrating the spatial browsing interaction.
- **"What to Expect" as social norm surfacing:** Rather than burying rules in reviews, we elevated house rules and social norms into a dedicated, emoji-coded box on every place detail page — directly addressing the anxiety-reduction job story (JS3) by making expectations visible before a visit.
- **Dot-scale ratings over stars:** Reviews use a 5-dot scale for noise, crowd, and energy instead of traditional star ratings. This gives more nuanced, dimension-specific feedback that maps directly to user concerns about social density (R5) and space availability (R1).
- **Preference quiz as onboarding:** The 5-step quiz captures user context (role, timing, vibe, goals, distance) to personalize the experience from the start, directly supporting energy conservation (JS2) by reducing the effort needed to find a suitable place.
- **Privacy-conditional UI:** The friend visibility list only appears when "Location Sharing with Friends" is enabled — if the toggle is off, users see a clear message explaining why the list is hidden, respecting user control over their data.

---

## Tech Stack

- **React** (JSX, single-file component architecture)
- **Vite** (build tool)
- **GitHub Pages** (hosting via GitHub Actions)
- **Figma** (design source)
