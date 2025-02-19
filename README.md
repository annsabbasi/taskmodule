# Realtime Group Chat App

## Overview

This application allows users to join a group chat in real-time. Users can:

- Enter a chat room with a name (persisted for auto-login).
- Send & receive messages with minimal delay using WebSockets.
- View chat history upon joining.
- Logout and rejoin with a different name.
- All messages are saved in MongoDB & `messages.json`.

## Key Design Choices

- **WebSockets (Socket.io)** for real-time, low-latency messaging.
- **MongoDB** for message persistence.
- **localStorage** for user session management.
- **JSON File Logging** for auditing message flow.

## Folder Structure

Refer to the project structure in the solution description.

## Running the Project

1. Create a `.env` file with `MONGO_URI=your_mongo_connection_string`.
2. Install dependencies:
   ```bash
   npm install
   ```
