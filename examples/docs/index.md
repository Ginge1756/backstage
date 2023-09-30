## Backstage Template: Example Node.js Template

### Overview
This template creates a simple Node.js service. It gathers input from the user, fetches a base template, publishes it to GitHub, and then registers the service in the catalog.

---

### Inputs

#### Step 1: Fill in Some Steps
- **Field**: `Name`
  - **Type**: `string`
  - **Description**: Unique name of the component
  - **Requirement**: Required

#### Step 2: Choose a Location
- **Field**: `Repository Location`
  - **Type**: `string`
  - **Description**: URL of the GitHub repository
  - **Requirement**: Required (must be from `github.com`)

---

### Actions

1. **Fetch Base**
  - **Action Type**: `fetch:template`
  - **Description**: Fetches the base content from a local directory (`./content`).
  - **Input**: Uses the `name` parameter for templating.

2. **Publish**
  - **Action Type**: `publish:github`
  - **Description**: Publishes the directory to the GitHub repository specified.
  - **Input**: Uses the `repoUrl` and `name` parameters.

3. **Register**
  - **Action Type**: `catalog:register`
  - **Description**: Registers the new component in the Backstage catalog.

---

### Outputs

- **Repository**: Link to the published GitHub repository.
- **Open in Catalog**: Shortcut to open the component in the Backstage catalog.
