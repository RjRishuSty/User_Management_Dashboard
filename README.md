# User Management Dashboard

A modern and responsive User Management Dashboard built with React and Material-UI, allowing users to view, add, update, and delete user information in an organized way.

---

## Description

This project is a web-based dashboard for managing user data. It provides an intuitive interface to display user details, update profiles, and delete users. It also features real-time notifications and responsive design for better user experience.

- **GitHub Repository:** [User Management Dashboard](https://github.com/RjRishuSty/User_Management_Dashboard.git)  
- **Live Demo:** [Vercel Link](https://user-management-dashboard-nine-rust.vercel.app/)

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **React** | Core library for building the frontend UI and components. |
| **React Router DOM** | To handle routing between pages within the dashboard. |
| **Material-UI (@mui/material, @mui/icons-material)** | Provides pre-built UI components and icons for faster and consistent design. |
| **@emotion/react & @emotion/styled** | Styling library for Material-UI components using CSS-in-JS. |
| **Axios** | Handles HTTP requests to fetch or update user data from APIs. |
| **Notistack** | Displays notifications (snackbars) for actions like success or error messages. |

---

## Implementation Logic

1. **User Listing:** Fetches a list of users from a JSON API and displays them in a table with sorting and filtering options.  
2. **Add User:** Opens a form to add a new user, validates input fields, and updates the dashboard dynamically.  
3. **Update User:** Allows editing of user information and updates the table upon successful submission.  
4. **Delete User:** Removes a user from the table with a confirmation notification.  
5. **Notifications:** Shows success/error messages for CRUD operations using Notistack.  

---

## Challenges Faced

- Handling asynchronous API calls with Axios while keeping the UI responsive.  
- Ensuring validation for form fields to prevent incorrect data submission.  
- Managing state across multiple components for updates, deletions, and notifications.  
- Making the dashboard responsive across desktop and mobile devices.  

---

## Steps to Run This Project

1. **Clone the Repository:**  
```bash
git clone https://github.com/RjRishuSty/User_Management_Dashboard.git
cd User_Management_Dashboard/frontend
npm install
npm start


