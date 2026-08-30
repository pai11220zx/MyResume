# Project: Com-Sci PBRU Website & CMS

## Architecture
- **Language & Paradigms:** PHP 8.2.12 (Procedural) and Vanilla JS (No external JS/PHP frameworks except utility libraries like SweetAlert2 and Chart.js).
- **Database:** PostgreSQL 18.4 (Port 5432) using `PDO` prepared statements. All data is fetched directly from PostgreSQL (Redis has been removed for deployment simplicity).
- **Development Tools:** Node.js (`package.json`) and Gulp (`gulpfile.js`) for CSS/JS processing and minification.
- **Central Configuration:** `php/init.php` (Session, Config Loader) and `php/config.php` (Environment variables).
- **Helpers:** Centralized reusable functions located in `php/helpers/` (One function per file) and `admin_panel/adminDbHelpers.php`.
- **Frontend Assets:** `assets/` (vendor files like FontAwesome), `css/` (custom styles separated into `components.css` and `pages.css` to enforce 100% caching), `js/` (Vanilla JS modules), `images/`.
- **Security Features:** CSRF Tokens, XSS Protection (`htmlspecialchars` with `ENT_QUOTES, 'UTF-8'`), Bcrypt password hashing, Session-based Rate Limiting, and protected `conn.php`.

## Current Project Baseline
- **Refactoring (DRY & SRP):** CSS is strictly separated from PHP files to support browser caching. Helper functions are modularized.
- **Performance & Caching:** Direct PostgreSQL queries only. Static assets rely on server-side caching.
- **Security Enhancements:** Strict XSS and SQL Injection prevention is applied across all frontend and admin modules.
- **Accessibility (a11y) & UX:** Uses semantic HTML (`<main>`), `aria-invalid`, and JS for dynamic ARIA states. Mobile UX avoids iOS auto-zoom by using 16px fonts for inputs and improved touch targets.
- **Clean-up:** Dead code and inline CSS have been thoroughly removed (except for resilient 404/500 error pages).

## Interface Contracts
- All public PHP pages must include `php/init.php` to access `BASE_URL`, helpers, and the database connection securely.
- Output from the database must be escaped using `htmlspecialchars($data, ENT_QUOTES, 'UTF-8')` to prevent XSS.
- Database access must use Prepared Statements via `conn.php` (no raw string interpolation).
- All forms (both Frontend and Admin) must include CSRF tokens: `<input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">`.
- Admin DB operations should use helpers in `adminDbHelpers.php` (e.g. `executeInsertWithImage()`, `executeUpdateWithImage()`).

## Code Layout
- **Frontend views:** `/pages/` (Divided by features e.g. `news/`, `portfolio/`, `about/`, `contact/`, `academic/`) and `/index.php`
- **Core Config:** `/php/init.php`, `/php/config.php`, `/conn.php`
- **Admin logic:** `/admin_panel/` (Contains `modules/`, `settings/`, `includes/`)
- **Authentication:** `/auth/` (Login, Logout)
- **Errors:** `/errors/` (404, 500 error pages)

## Documentation & SOPs
- **System Overview & Context:** [CONTEXT.md](file:///c:/xampp/htdocs/comsci-it-pbru/CONTEXT.md)
- **UI/UX Design Standards:** [DESIGN.md](file:///c:/xampp/htdocs/comsci-it-pbru/DESIGN.md)
- **Product Requirements Document (PRD):** [PRODUCT.md](file:///c:/xampp/htdocs/comsci-it-pbru/PRODUCT.md)
- **Security Baseline Report:** [docs/security_audit_report.md](file:///c:/xampp/htdocs/comsci-it-pbru/docs/security_audit_report.md)
- **Staging & Deployment SOP:** [docs/staging_test_guide.md](file:///c:/xampp/htdocs/comsci-it-pbru/docs/staging_test_guide.md)
- **Standard Testing Checklist:** [docs/testing_checklist.md](file:///c:/xampp/htdocs/comsci-it-pbru/docs/testing_checklist.md)

