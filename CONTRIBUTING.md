# Contributing to ThemeCraft

First off, thank you for considering contributing to ThemeCraft! 🎉

It's people like you that make ThemeCraft better for the entire developer community.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### 📝 Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these beginner-friendly and help-wanted issues:

- **Beginner issues** - issues which should only require a few lines of code
- **Help wanted issues** - issues which should be a bit more involved than beginner issues

## Development Process

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)
- Git

### Setting Up Your Development Environment

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR-USERNAME/themecraft.git
   cd themecraft
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/symphoneiceattack/themecraft.git
   ```

3. **Install pnpm** (if you don't have it)
   ```bash
   npm install -g pnpm
   ```

4. **Install dependencies**
   ```bash
   pnpm install
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

### Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**
   - Follow our coding standards (see below)
   - Add tests for new features
   - Update documentation as needed

3. **Test your changes**
   ```bash
   # Run linting
   pnpm lint
   
   # Run type checking
   pnpm type-check
   
   # Build the project
   pnpm build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Fill out the PR template
   - Submit the PR

## Coding Standards

### Code Style

We use **Biome** for linting and formatting. The code style is automatically enforced:

```bash
# Format code
npm run format

# Check for linting issues
npm run lint
```

### TypeScript Guidelines

- **Always define types** for props, state, and function parameters
- **Use interfaces** for object shapes
- **Avoid `any`** unless absolutely necessary
- **Use descriptive variable names**

### React Guidelines

- **Use functional components** with hooks
- **Follow the Rules of Hooks**
- **Use proper dependency arrays** in useEffect
- **Keep components small** and focused
- **Use meaningful component names**

### CSS/Styling Guidelines

- **Use Tailwind CSS** for styling
- **Follow mobile-first** responsive design
- **Use semantic HTML** elements
- **Ensure accessibility** standards

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): subject

body

footer
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

```bash
feat(theme-editor): add color picker component
fix(preview): resolve syntax highlighting bug
docs(readme): update installation instructions
style(ui): improve button hover effects
```

## Testing

We encourage testing for all new features:

- **Unit tests** for utility functions
- **Component tests** for React components
- **Integration tests** for complex workflows

```bash
# Run tests (when implemented)
pnpm test

# Run tests in watch mode
pnpm test:watch
```

## Documentation

- **Update README.md** if you change user-facing functionality
- **Add JSDoc comments** for complex functions
- **Update inline comments** for tricky logic
- **Document new features** in the wiki

## Pull Request Process

1. **Ensure your PR passes all checks**
2. **Update documentation** if needed
3. **Add tests** for new functionality
4. **Ensure descriptive commit messages**
5. **Request review** from maintainers

### PR Title Format

- Use conventional commits format
- Be descriptive but concise
- Include issue numbers if applicable

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Cross-browser testing (if applicable)

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
```

## Release Process

1. **Features are merged** into main branch
2. **Maintainers review** and approve releases
3. **Version is tagged** following semver
4. **Changelog is updated**
5. **Release notes are created**

## Getting Help

- **GitHub Issues** - For bug reports and feature requests
- **GitHub Discussions** - For questions and general discussion
- **Email** - For security issues: [contact email]

## Recognition

Contributors who make significant contributions will be:

- **Added to README.md** contributors section
- **Mentioned in release notes**
- **Given credit** in project documentation

## License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

## Thank You! 🙏

Thank you for contributing to ThemeCraft! Every contribution, no matter how small, helps make this project better for everyone.

Your time and effort are greatly appreciated, and we look forward to seeing your contributions!

---

**Happy coding! 🚀**