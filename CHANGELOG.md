# @victorfbrito/neo-ui-demo

## 0.2.0

### Minor Changes

- BREAKING: Require Tailwind CSS v4. Remove all Tailwind v3 documentation and examples. Simplify setup to focus exclusively on Tailwind v4 with PostCSS plugin configuration.

### Patch Changes

- Document @tailwindcss/postcss requirement for Tailwind v4 users. Update all setup instructions to include the PostCSS plugin installation.

## 0.1.7

### Patch Changes

- 65db542: Add Tailwind CSS v4 setup instructions alongside v3. Documentation now supports both Tailwind versions with clear examples for each.
- Fix CSS comment syntax - remove curly braces that were causing PostCSS parsing errors

## 0.1.6

### Patch Changes

- Add Tailwind CSS v4 setup instructions alongside v3. Documentation now supports both Tailwind versions with clear examples for each.

## 0.1.5

### Patch Changes

- Document Tailwind CSS requirement and update consumer setup instructions. The library CSS now only includes design tokens and base styles - consumers must have Tailwind configured to process utility classes.

## 0.1.4

### Patch Changes

- Fix CSS build - inline tokens to prevent import errors in consuming applications

## 0.1.3

### Patch Changes

- Fix TypeScript errors and improve build process
- CSS improve order - tokens now load before utilities
