# Overview

[**MyEstate**](https://mern-estate-gvzy.onrender.com) is a full-stack
web application designed to streamline real estate operations. It
facilitates property listings, user authentication, and property
management, providing a seamless experience for both agents and clients.

# Features

## 🔍 Property Listings {#property-listings}

• **Search Functionality:** Users can search for properties based on
various criteria such as location, price, and property type.

• **Detailed Listings:** Each property listing includes comprehensive
details like images, descriptions, pricing, and contact information.

## 👤 User Authentication {#user-authentication}

• **Secure Login/Registration:** Users can create accounts using
credentials or Google and log in securely.

## 🏠 Property Management {#property-management}

• **Add/Edit/Delete Properties:** Authorized users can add new property
listings, edit or delete existing ones.

# Technology Stack

## Frontend

**• React.js:** For building dynamic user interfaces.

**• Vite:** Fast build tool and development server for React.

**• Tailwind CSS:** Utility-first CSS framework for styling.

**• React Router:** Handles client-side routing.

**• Axios:** For making HTTP requests to the backend API.

## Backend

**• Node.js:** JavaScript runtime for building the server-side
application.

**• Express.js:** Web framework for handling routing and middleware.

**• MongoDB:** NoSQL database for storing application data.

**• Mongoose:** Object Data Modeling (ODM) library for MongoDB and
Node.js.

# Installation and Setup

## Prerequisites

**• Node.js**

**• MongoDB instance (local or cloud-based)**

## Backend Setup

**1. Install Dependencies:**
```
npm install
```
**2. Configure Environment Variables:**  
Create a \`.env\` file in the backend directory and add:
```
JWT_SECRET=\"\"  
MONGO=\"\"  
PORTFOLIO=\"\"
```
**3. Start the Server:**
```
npm run start
```
## Frontend Setup

**1. Navigate to the Frontend Directory:**
```
cd client
```
**2. Install Dependencies:**
```
npm install
```
**3. Configure Environment Variables:**  
Create a \`.env\` file in the backend directory and add:
```
VITE_FIREBASE_API_KEY=\"\"
```
**4. Start the React Application:**
```
npm run dev
```