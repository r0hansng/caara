# Contributing Guide

We welcome contributions from the community! This document outlines the process for contributing to CAARA.

## Code of Conduct

Please be respectful and constructive in all interactions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** from `main`

```bash
git clone https://github.com/your-username/caara.git
cd caara
git checkout -b feature/your-feature-name
```

## Development Setup

See [Getting Started](./getting-started.md) for detailed setup instructions.

## Making Changes

### Code Standards

**TypeScript**

- All code must be written in TypeScript
- Proper type annotations are required
- No `any` types without justification (add `// @ts-ignore` comment explaining why)
- Use interfaces for public APIs

**Code Style**

- Format code with Prettier: `bun run format`
- Lint with ESLint: `bun run lint`
- Type check: `bun run type-check`

**Testing**

- Write tests for new features
- All tests must pass: `bun run test`
- Maintain test coverage above 80%

**Documentation**

- Update relevant documentation for API changes
- Add inline comments for complex logic
- Update README if adding user-facing features

### Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** with regular commits

3. **Ensure code quality**

   ```bash
   bun run lint:fix      # Fix auto-fixable issues
   bun run format        # Format with Prettier
   bun run type-check    # Check types
   bun run test          # Run tests
   ```

4. **Commit with clear messages**

   ```bash
   git commit -m "feat: add query decomposition for complex questions"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `test:` for test changes
   - `refactor:` for code refactoring
   - `chore:` for build/dependency changes

5. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** with a clear description

## Pull Request Process

### Description

Include:

- What problem does this solve?
- How does it solve the problem?
- Are there any side effects?
- Related issues (use `Closes #123`)

### Review Checklist

Before submitting, ensure:

- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] New tests added for new features
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] No unnecessary dependencies added

### Review Timeline

- Reviews typically happen within 2-3 business days
- Maintainers may request changes
- All feedback should be addressed before merging

## Reporting Issues

### Bug Reports

Include:

- **Title**: Clear, descriptive title
- **Description**: What were you trying to do?
- **Steps to Reproduce**: Exact steps to reproduce the problem
- **Expected Behavior**: What should happen?
- **Actual Behavior**: What actually happens?
- **Environment**: Node version, OS, etc.
- **Error Messages**: Full stack traces if available

### Feature Requests

Include:

- **Title**: Clear description of the feature
- **Motivation**: Why should this feature be added?
- **Use Case**: Real-world use case
- **Implementation Thoughts**: Any ideas on how to implement?

## Project Structure

For contributing to specific areas:

- **API Changes**: See `src/api/`
- **Core Logic**: See `src/agents/`, `src/services/`
- **Database**: See `src/db/`, `prisma/`
- **Tests**: See `tests/`
- **Documentation**: See `docs/`

## Key Areas for Contribution

- **Architecture Components**: Executor, Planner, Retrieval
- **Performance**: Caching, query optimization
- **Testing**: Improved test coverage and scenarios
- **Documentation**: More examples, guides, and API docs
- **Infrastructure**: Docker, CI/CD, monitoring

## Questions?

- Check existing [GitHub Issues](../../issues)
- Start a [GitHub Discussion](../../discussions)
- Review [Architecture Guide](./architecture.md)

## Recognition

Contributors will be recognized in the project README and release notes. Thank you for your contributions!
