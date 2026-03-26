# Hack Lab Project

A lab project demonstrating web proxying and scraping techniques for educational purposes.

## Project Overview

This project contains:
- **Proxy Server** - An Express.js server that fetches content from external URLs via CORS-enabled proxy
- **Movie Player Interface** - An HTML5 web interface with HLS.js video streaming support

## File Structure

```
├── attack.js              # Express proxy server (main entry point)
├── hackWeb.bygodgi.html   # Web interface for movie player
├── package.json           # Project dependencies
└── README.md             # This file
```

## Quick Start

### Prerequisites
- Node.js and npm installed

### Installation

```bash
# Install dependencies
npm install
```

### Running the Server

```bash
node attack.js
```

The proxy server will start on `http://localhost:1234`

## Features

### Proxy Server (`attack.js`)
- **CORS Enabled** - Accepts requests from any origin
- **Content Fetching** - Fetches and returns HTML content from specified URLs
- **Endpoint**: `GET /api/proxy?url=<target_url>`

**Example Request:**
```
http://localhost:1234/api/proxy?url=https://example.com
```

### Movie Player Interface (`hackWeb.bygodgi.html`)
- Video player with HLS.js support
- URL input for fetching movie data
- Episode selection buttons
- Dark theme UI (Netflix-style)

## Dependencies

- **express** (^5.2.1) - Web framework
- **cors** (^2.8.6) - Cross-Origin Resource Sharing
- **node-fetch** (^2.7.0) - HTTP client for Node.js

## Note

This is an educational lab project for learning purposes only. Use responsibly and respect website terms of service and copyright laws.

## License

ISC

---

**Created**: 2026
