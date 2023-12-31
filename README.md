# Real-time Chat App with Python Backend

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Demo](#demo)
- [Deploy Your Own](#deploy-your-own)
- [Developing Locally](#developing-locally)

## Features
- Real-time messaging
- User authentication
- Chat rooms
- Responsive UI

## Technologies Used
- Flask
- Next.js
- Socket.IO


## Installation
### Backend Setup
1. Navigate to the `backend` directory
2. Create a virtual environment: `python3 -m venv venv`
3. Activate the virtual environment
4. Install required packages: `pip install -r requirements.txt`
5. Set up PostgreSQL database and update `config.py`
6. Run database migrations: `flask db upgrade`
7. Start Flask server: `flask run`

### Frontend Setup
1. Navigate to the `frontend` directory
2. Install dependencies: `npm install`
3. Update API endpoint in `config.js`
4. Start Next.js development server: `npm run dev`

## Usage
1. Access the application in your browser
2. Register an account or log in
3. Explore chat rooms or create new ones
4. Send and receive real-time messages

## Introduction

This is a hybrid Next.js + Python app that uses Next.js as the frontend and Flask as the API backend. One great use case of this is to write Next.js apps that use Python AI libraries on the backend.

## How It Works

The Python/Flask server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/vercel/examples/blob/main/python/nextjs-flask/next.config.js) to map any request to `/api/:path*` to the Flask API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:5328` port, which is where the Flask server is running.

In production, the Flask server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Demo

You can watch the demo video by clicking the link below:

https://drive.google.com/file/d/1AyOtBw53Pflqt6TTv9ru6aRdzvHcrXKu/view?usp=sharing


## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-title=Next.js%20Flask%20Starter&demo-description=Simple%20Next.js%20boilerplate%20that%20uses%20Flask%20as%20the%20API%20backend.&demo-url=https%3A%2F%2Fnextjs-flask-starter.vercel.app%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F795TzKM3irWu6KBCUPpPz%2F44e0c6622097b1eea9b48f732bf75d08%2FCleanShot_2023-05-23_at_12.02.15.png&project-name=Next.js%20Flask%20Starter&repository-name=nextjs-flask-starter&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fpython%2Fnextjs-flask&from=vercel-examples-repo)

## Developing Locally

Its very easy to run the app, just follow the steps given below:
1. First of all clone this repo on VS Code.
2. Next you have to open a terminal in the VS Code itself.
3. After that write the command npm install, this will install Node Package Manager.
4. Now run the command npm run dev, this will start your backend i.e Flask and Frontend part on your localhost 3000.
5. Simply open any browser and go to http://localhost:3000/, to try the app.

