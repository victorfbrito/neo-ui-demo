# NPM Versioning Guide for Neo UI Demo

## Quick Reference

### Semantic Versioning
- **Patch** (0.1.1 → 0.1.2): Bug fixes, no API changes
- **Minor** (0.1.1 → 0.2.0): New features, backward compatible
- **Major** (0.1.1 → 1.0.0): Breaking changes

## Release Workflow

### 1. Make Changes
Edit your components, fix bugs, add features.

### 2. Create Changeset (Option A - Interactive)
```bash
npm run changeset
# Select: patch, minor, or major
# Write a description
```

### 2. Create Changeset (Option B - Manual)
Create `.changeset/my-feature.md`:
```markdown
---
"@victorfbrito/neo-ui-demo": minor
---

Add new Dropdown component with keyboard navigation
```

### 3. Version Package
```bash
npm run version-packages
```
This will:
- Update version in `package.json`
- Update `CHANGELOG.md`
- Delete consumed changeset files

### 4. Commit Version Changes
```bash
git add .
git commit -m "chore: version packages"
git push
```

### 5. Publish to NPM
```bash
npm run release
```
Or manually:
```bash
npm publish
```

### 6. Create Git Tag (Optional but Recommended)
```bash
git tag v0.2.0
git push --tags
```

## Common Scenarios

### Scenario 1: Bug Fix Release
```bash
# Fix the bug in your code
# Create changeset
echo '---
"@victorfbrito/neo-ui-demo": patch
---

Fix button disabled state styling' > .changeset/fix-button.md

# Version and publish
npm run version-packages
git add .
git commit -m "chore: release v0.1.2"
npm publish
git push
```

### Scenario 2: New Feature Release
```bash
# Add new component
# Create changeset
echo '---
"@victorfbrito/neo-ui-demo": minor
---

Add Dropdown component with accessibility support' > .changeset/add-dropdown.md

# Version and publish
npm run version-packages
git add .
git commit -m "chore: release v0.2.0"
npm publish
git push
```

### Scenario 3: Breaking Change Release
```bash
# Make breaking changes
# Create changeset
echo '---
"@victorfbrito/neo-ui-demo": major
---

BREAKING: Rename Button variant "default" to "primary"
BREAKING: Remove deprecated Input "type" prop' > .changeset/breaking-changes.md

# Version and publish
npm run version-packages
git add .
git commit -m "chore: release v1.0.0"
npm publish
git push
```

## Important Notes

### ⚠️ NPM Version Rules
1. **Cannot unpublish** after 24 hours
2. **Cannot reuse** version numbers
3. **Cannot modify** published versions
4. If you mess up, you must publish a new version

### 🎯 Best Practices
1. Always create changesets for user-facing changes
2. Don't create changesets for docs-only or config changes
3. Batch multiple changes before versioning
4. Test thoroughly before publishing
5. Keep good changelog entries

### 📝 Changeset Examples

**Good Changeset:**
```markdown
---
"@victorfbrito/neo-ui-demo": minor
---

Add new Search component with debounced input and keyboard navigation. 
This component supports custom filtering and async data loading.
```

**Bad Changeset:**
```markdown
---
"@victorfbrito/neo-ui-demo": minor
---

stuff
```

## Version History

Current version: 0.1.1
- 0.1.1: Initial published version with core components

## Future Release Targets

### v0.2.0 (Next Minor)
- [ ] Add Dropdown component
- [ ] Add Tooltip component
- [ ] Improve dark mode transitions

### v1.0.0 (First Major)
- [ ] Stable API
- [ ] Complete documentation
- [ ] 90%+ test coverage
- [ ] Production-ready

## Automated Releases (GitHub Actions)

Your repository has a GitHub Actions workflow for automated releases.
When you push changesets, it will:
1. Create a PR with version bumps
2. Auto-publish when PR is merged

To enable:
1. Add NPM_TOKEN to GitHub Secrets
2. Merge version PR
3. GitHub Actions will auto-publish

