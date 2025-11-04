# EvoGit AI Chat Demo

A demonstration repository for autonomous AI-driven code improvement using Claude Code.

## Overview

This project showcases how AI agents can autonomously improve codebases through scheduled workflows. It features:

- **Autonomous Code Review**: Claude Code analyzes the repository and identifies improvements
- **Automated PRs**: Self-improvement workflow creates pull requests with fixes
- **Continuous Evolution**: Scheduled runs ensure the codebase evolves over time

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── self-improve.yml    # Claude Code self-improvement workflow
├── src/
│   └── components/
│       ├── App.js              # Main React application component
│       ├── App.css             # Application styles
│       └── ChatSidebar.js      # Chat sidebar component
├── CLAUDE.md                   # AI agent guardrails and permissions
├── README.md                   # This file
└── package.json                # Project dependencies
```

## Features

### Claude Code Self-Improvement Workflow

The repository includes a GitHub Actions workflow that runs twice daily (06:00 and 18:00 America/Chicago) to:

1. Analyze the codebase for improvement opportunities
2. Identify 2-4 high-impact, low-risk changes
3. Implement fixes (documentation, error handling, code quality)
4. Create pull requests with the improvements
5. Trigger automated code reviews

### AI Agent Guardrails

The `CLAUDE.md` file defines what the AI agent can and cannot modify:

**✅ Allowed:**
- Documentation improvements
- Bug fixes and error handling
- Code quality enhancements
- Test additions
- Configuration updates

**❌ Restricted:**
- Breaking API changes
- Removing features without justification
- Modifying production configuration

## Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will start on `http://localhost:3000`.

### Running Tests

```bash
npm test
```

## Workflow Permissions

The self-improvement workflow requires:

- `contents: write` - To create commits
- `pull-requests: write` - To create PRs
- `issues: write` - To create issues if needed
- `CLAUDE_CODE_OAUTH_TOKEN` secret - For Claude Code authentication

## Contributing

This repository demonstrates autonomous AI-driven improvements. Human contributions are welcome through:

1. Creating issues labeled `ai-implement` for AI-driven features
2. Standard pull requests for manual changes
3. Reviewing and merging AI-generated PRs

## License

This is a demonstration project. See LICENSE for details.

## Learn More

- [Claude Code Documentation](https://docs.anthropic.com/claude/docs)
- [GitHub Actions](https://docs.github.com/en/actions)
- [React Documentation](https://react.dev/)
