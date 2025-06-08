# GitHub Actions CI/CD Documentation

## Overview

This project uses a **dual-workflow CI/CD system** with GitHub Actions:

1. **Comprehensive Testing** (`ci-cd.yml`) - Runs all tests automatically on every PR
2. **Manual Merge Control** (`merge-on-command.yml`) - Triggered by `:runMerge` comment for controlled merging

## Workflow Files

### 1. Comprehensive Testing Pipeline (`.github/workflows/ci-cd.yml`)

**Triggers:** Pull requests and pushes to `main` branch

**Purpose:** Run full test suite and provide detailed feedback

**Jobs:**

- **Test Execution**: ESLint, unit tests, integration tests, performance tests
- **Coverage Reporting**: Generate and post test coverage results
- **Build Validation**: Verify production builds work correctly

### 2. Manual Merge Control (`.github/workflows/merge-on-command.yml`)

**Triggers:** PR comments containing `:runMerge`

**Purpose:** Controlled merge process with fast validation

**Jobs:**

- **Comment Recognition**: React to `:runMerge` commands with emoji feedback
- **Unit Test Validation**: Run fast unit tests before merge
- **Auto-Merge**: Squash merge PRs when unit tests pass

### 3. Branch Protection (`.github/workflows/branch-protection.yml`)

**Triggers:** Pull request events

**Purpose:** Enforce PR standards and requirements

**Checks:** Draft detection, title validation, format verification

## Workflow Process

### PR Creation → Automatic Testing

```
1. PR created/updated → Triggers ci-cd.yml
2. Runs comprehensive test suite (35+ tests)
3. Posts detailed results as PR comment
4. Sets status checks (pass/fail)
```

### Manual Merge → Controlled Deployment

```
1. Comment ":runMerge" on PR → Triggers merge-on-command.yml
2. Runs unit tests only (fast validation)
3. Auto-merges if tests pass
4. Posts success/failure feedback
```

## Configuration Requirements

### Branch Protection Rules (GitHub Settings)

Navigate to **Settings** → **Branches** → **Add rule**:

```yaml
Branch name pattern: main
Required status checks:
  - test (Run Tests)
  - status-check (Required Status Check)
  - enforce-tests (Enforce Test Requirements)

Other settings: ✅ Require pull request reviews before merging
  ✅ Require status checks to pass before merging
  ✅ Require branches to be up to date before merging
```

### Workflow Permissions

Ensure repository has these permissions:

- **Actions**: Read and write
- **Pull requests**: Write
- **Contents**: Write
- **Metadata**: Read

## Troubleshooting

### Common Issues

**Tests fail in CI but pass locally:**

- Check Node.js version compatibility (should be 18+)
- Verify `package-lock.json` is committed
- Run `npm ci` instead of `npm install`

**`:runMerge` command doesn't trigger merge:**

- Ensure comment is exactly `:runMerge` (case-sensitive)
- Check that PR is not in draft status
- Verify no merge conflicts exist
- Confirm required status checks are passing

**Status checks don't appear:**

- Validate workflow YAML syntax
- Check that triggers match PR events
- Ensure workflow files are in `.github/workflows/`

### Debug Commands

```bash
# Test locally before pushing
npm run test:run
npm run lint
npm run build

# Check coverage
npm run test:coverage
```

## Customization

### Modify Test Requirements

Edit `.github/workflows/ci-cd.yml`:

```yaml
# Add new test types
- name: Run integration tests
  run: npm run test:integration

# Change coverage threshold
- name: Check coverage
  run: npm run test:coverage -- --coverage.threshold.lines=95
```

### Change Merge Strategy

Edit `.github/workflows/merge-on-command.yml`:

```yaml
# Options: merge, squash, rebase
merge_method: "squash"
```
