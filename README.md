# Algolia Search Client

A Node.js CLI search client for Algolia

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)
-   [Author](#author)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

-   npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/georgiosgiatsidis/algolia-search-client.git
```

3. Install the package globally

```sh
npm install -g .
```

4. Setup the enviroment variables

```sh
algolia-search-client setup --applicationId YourApplicationID --key YourAdminAPIKey --index your_index_name
```

or

```sh
cp .env.example .env
```

and enter APPLICATION_ID, API_KEY and INDEX_NAME manually.

Lint
```sh
npm run lint
```
Test
```sh
npm test
```

## Usage

See Available commands

```sh
algolia-search-client
```

Search command

```sh
algolia-search-client search
```

Search is interactive and you have to enter a search term and the page number (optional)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Author

Georgios Giatsidis - georgiosgiatsidis@gmail.com

Project Link: [https://github.com/georgiosgiatsidis/algolia-search-client](https://github.com/georgiosgiatsidis/algolia-search-client)
