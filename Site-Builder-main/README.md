
---
# 🌐 SiteBuilder – AI-Powered Website Builder

Owner: **Md Ashif**  
Email: **ashif22288@iiitd.ac.in**

SiteBuilder is a **full-stack, AI-powered, token-based website builder** that allows users to generate and deploy complete websites simply by writing **natural language prompts**. It combines modern web technologies, secure payments, and scalable infrastructure to deliver a production-ready platform.

---

## 🧠 Core Idea

Instead of manually coding a website:

1. Users **buy tokens**
2. They **describe the website they want**
3. AI **generates the website**
4. Users **preview, download and deploy it**

Tokens act as **currency**, and Stripe handles **secure payments**.

---



## 🚀 Key Features Explained

### 🪙 Token-Based System

* Users must purchase tokens before building websites
* Tokens control usage, prevent abuse, and enable monetization
* Each website generation or premium template consumes tokens

---

### 🧠 AI Prompt-Based Website Generation

* Users describe their site using natural language
  Example:
  *“Create a portfolio website with a dark theme and contact form”*
* Backend processes the prompt and generates site structure, content, and layout

---

### ⬇️ Website Code Download (HTML & CSS)

* Users can **download the generated website source code**
* Output includes:

  * Clean **HTML**
  * Styled **CSS**
* Downloaded code can be:

  * Hosted on any platform
  * Modified manually
  * Used as a starting template

This gives users **full ownership and flexibility** over their generated websites.

---

### 💳 Secure Payments with **Stripe**

* Stripe Checkout is used for token purchases
* Stripe Webhooks confirm successful payments
* Tokens are credited only after verified payment

---

### 🗄️ Scalable Database with **Neon**

* Uses serverless PostgreSQL
* Stores users, token balances, generated websites, and transactions
* Highly scalable and production-ready

---

### ⚡ Modern Full-Stack Architecture

* Clean separation of frontend and backend
* Easy to scale, maintain, and deploy
* Uses Node.js throughout the stack

---

## 🖼️ SiteBuilder Website 

### 🏠 Home Page
![SiteBuilder Home Page](image/sitebuilder.png)

### 📁 My Projects Page
![SiteBuilder Projects Page](image/project.png)

### 🚀 Published Website Page
![SiteBuilder Published Page](image/published.png)

---

## 🧩 System Architecture

### 🖥️ Frontend (Client)

* Built using **TypeScript + React**
* Styled with **Tailwind CSS**
* Handles:

  * User authentication
  * Prompt input
  * Token balance display
  * Website preview
* Deployed on **Vercel**

---

### 🧪 Backend (Server)

* Built with **Node.js**
* Uses Next.js API Routes or Express
* Handles:

  * Authentication & authorization
  * Token deduction logic
  * AI website generation requests
  * Stripe webhooks
* Deployed on **Render**

---

## 🛠️ Tech Stack Summary

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | TypeScript, React, Tailwind CSS        |
| Backend    | Node.js                             |
| Database   | PostgreSQL (Neon)                   |
| Payments   | Stripe                              |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## 📂 Project Structure

```bash
sitebuilder/
├── client/          # Frontend (React.js)
├── server/          # Backend (Node.js APIs)
└── README.md
```

---

## 🔁 User Flow (End-to-End)

1. User signs up / logs in
2. Purchases tokens using Stripe
3. Enters a website prompt
4. AI generates the website
5. User previews and deploys the site

---

## 🧪 Environment Variables

Add **proper and safe `.env` setup** in client and server side for running:

```env
# Server & App
NODE_ENV="development"
TRUSTED_ORIGINS="http://localhost:5173"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database
DATABASE_URL="postgresql://user:password@host/dbname"

# Authentication
BETTER_AUTH_SECRET="your_secret_key"
BETTER_AUTH_URL="https://site-builder-1-o1y7.onrender.com"

# AI
AI_API_KEY="your_ai_api_key"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```
---

## ☁️ Deployment Overview

### Frontend

* Hosted on **Vercel**
* Auto-deploys on GitHub push

### Backend

* Hosted on **Render**
* Handles APIs, AI logic, Stripe webhooks

---

## 🔮 Future Enhancements

* AI image & content generation

---

Instead of manually coding a website:

1. Users **buy tokens**
2. They **describe the website they want**
3. AI **generates the website**
4. Users **preview, download and deploy it**

Tokens act as **currency**, and Stripe handles **secure payments**.

---

## 🚀 Key Features Explained

### 🪙 Token-Based System

* Users must purchase tokens before building websites
* Tokens control usage, prevent abuse, and enable monetization
* Each website generation or premium template consumes tokens

---

### 🧠 AI Prompt-Based Website Generation

* Users describe their site using natural language
  Example:
  *“Create a portfolio website with a dark theme and contact form”*
* Backend processes the prompt and generates site structure, content, and layout

---

### ⬇️ Website Code Download (HTML & CSS)

* Users can **download the generated website source code**
* Output includes:

  * Clean **HTML**
  * Styled **CSS**
* Downloaded code can be:

  * Hosted on any platform
  * Modified manually
  * Used as a starting template

This gives users **full ownership and flexibility** over their generated websites.

---

### 💳 Secure Payments with **Stripe**

* Stripe Checkout is used for token purchases
* Stripe Webhooks confirm successful payments
* Tokens are credited only after verified payment

---

### 🗄️ Scalable Database with **Neon**

* Uses serverless PostgreSQL
* Stores users, token balances, generated websites, and transactions
* Highly scalable and production-ready

---

### ⚡ Modern Full-Stack Architecture

* Clean separation of frontend and backend
* Easy to scale, maintain, and deploy
* Uses Node.js throughout the stack

---

## 🧩 System Architecture

### 🖥️ Frontend (Client)

* Built using **TypeScript + React**
* Styled with **Tailwind CSS**
* Handles:

  * User authentication
  * Prompt input
  * Token balance display
  * Website preview
* Deployed on **Vercel**

---

### 🧪 Backend (Server)

* Built with **Node.js**
* Uses Next.js API Routes or Express
* Handles:

  * Authentication & authorization
  * Token deduction logic
  * AI website generation requests
  * Stripe webhooks
* Deployed on **Render**

---

## 🛠️ Tech Stack Summary

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | TypeScript, React, Tailwind CSS        |
| Backend    | Node.js                             |
| Database   | PostgreSQL (Neon)                   |
| Payments   | Stripe                              |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## 📂 Project Structure

```bash
sitebuilder/
├── client/          # Frontend (React.js)
├── server/          # Backend (Node.js APIs)
└── README.md
```

---

## 🔁 User Flow (End-to-End)

1. User signs up / logs in
2. Purchases tokens using Stripe
3. Enters a website prompt
4. AI generates the website
5. User previews and deploys the site

---

## 🧪 Environment Variables

Add **proper and safe `.env` setup** in client and server side for running:

```env
# Server & App
NODE_ENV="development"
TRUSTED_ORIGINS="http://localhost:5173"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database
DATABASE_URL="postgresql://user:password@host/dbname"

# Authentication
BETTER_AUTH_SECRET="your_secret_key"
BETTER_AUTH_URL="https://site-builder-1-o1y7.onrender.com"

# AI
AI_API_KEY="your_ai_api_key"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```
---

## ☁️ Deployment Overview

### Frontend

* Hosted on **Vercel**
* Auto-deploys on GitHub push

### Backend

* Hosted on **Render**
* Handles APIs, AI logic, Stripe webhooks

---

## 🔮 Future Enhancements

* AI image & content generation

---
