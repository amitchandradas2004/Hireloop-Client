# 🚀 HireLoop - Modern Job Hunting Portal

> A full-featured job marketplace connecting Job Seekers and Recruiters through a modern, subscription-based hiring platform.

## 🌐 Live Demo

- **Client:** https://github.com/amitchandradas2004/Hireloop-Client
- **Server:** https://github.com/amitchandradas2004/HireLoop_Server

---

## 📖 Overview

HireLoop is a comprehensive recruitment platform designed to streamline the hiring process for both job seekers and employers.

The platform enables job seekers to discover opportunities, apply to jobs, track applications, and manage career growth, while recruiters can post jobs, manage applicants, and monitor hiring performance. Administrators oversee platform operations, company approvals, subscriptions, and user management.

---

# ✨ Key Features

## 👤 For Job Seekers

- Create and manage professional profiles
- Browse jobs with advanced filtering
- Save jobs for later
- Apply directly through the platform
- Upload resume (PDF)
- Track application status
- View application history
- Upgrade subscription plans
- Receive job updates and notifications

---

## 🏢 For Recruiters

- Register and manage companies
- Create, edit, and delete job postings
- Review applicants
- Download candidate resumes
- Update application status
- Track hiring analytics
- Manage subscription plans
- Monitor active job limits

---

## 🛡️ For Admins

- Manage all users
- Approve or reject companies
- Moderate job listings
- Manage subscriptions
- View platform analytics
- Track revenue
- Control user roles
- Suspend or activate accounts

---

# 👥 User Roles & Permissions

## 👤 Seeker

### Profile Management

- Update profile information
- Upload resume
- Add skills
- Add professional headline
- Update bio

### Job Actions

- Browse jobs
- Search jobs
- Filter jobs
- Save jobs
- Remove saved jobs
- Apply for jobs

### Application Management

- View all applications
- Track application status
- View job details

### Subscription Management

- Upgrade plan
- Downgrade plan
- View payment history

---

## 🏢 Recruiter

### Company Management

- Register company
- Edit company information
- Upload company logo
- Manage company profile

### Job Management

- Create job posts
- Edit job posts
- Delete job posts
- Close jobs
- Reopen jobs

### Applicant Management

- View applicants
- Review resumes
- Change application status
- Notify applicants

### Subscription Management

- Manage plans
- View billing history
- Increase active job limits

---

## 🛡️ Admin

### User Management

- View all users
- Search users
- Filter users by role
- Change user roles
- Suspend users
- Activate users

### Company Management

- Approve companies
- Reject companies
- Monitor company registrations

### Job Moderation

- View all jobs
- Remove jobs
- Filter jobs
- Search jobs

### Financial Management

- View payments
- Track subscriptions
- Monitor revenue

---

# 📊 Application Workflow

```text
Job Posted
    ↓
Seeker Applies
    ↓
Under Review
    ↓
Shortlisted
    ↓
Offered / Rejected
```

## Application Status

| Status       | Description                      |
| ------------ | -------------------------------- |
| Applied      | Application submitted            |
| Under Review | Recruiter reviewing application  |
| Shortlisted  | Candidate selected for interview |
| Rejected     | Application declined             |
| Offered      | Job offer sent                   |

---

# 🏢 Company Approval Workflow

```text
Company Registration
          ↓
       Pending
          ↓
    Admin Review
      ↙      ↘
 Approved  Rejected
```

## Company Status

| Status   | Description              |
| -------- | ------------------------ |
| Pending  | Waiting for admin review |
| Approved | Publicly visible         |
| Rejected | Registration declined    |

---

# 💳 Subscription Plans

## 👤 Job Seeker Plans

| Plan    | Price     | Applications | Saved Jobs | Features                                      |
| ------- | --------- | ------------ | ---------- | --------------------------------------------- |
| Free    | $0        | 3/month      | 10         | Basic Profile, Alerts                         |
| Pro     | $19/month | 30/month     | Unlimited  | Tracking, Salary Insights                     |
| Premium | $39/month | Unlimited    | Unlimited  | Profile Boost, Early Access, Priority Support |

---

## 🏢 Recruiter Plans

| Plan       | Price      | Active Jobs | Analytics | Features                                               |
| ---------- | ---------- | ----------- | --------- | ------------------------------------------------------ |
| Free       | $0         | 3           | No        | Basic Applicant Management                             |
| Growth     | $49/month  | 10          | Basic     | Applicant Tracking                                     |
| Enterprise | $149/month | 50          | Advanced  | Featured Listings, Team Collaboration, Custom Branding |

---

# 📈 Dashboard Modules

## 👤 Seeker Dashboard

### Dashboard Home

- Saved Jobs Statistics
- Applications Statistics
- Interview Statistics
- Offer Statistics
- Application Status Chart
- Recent Activity Feed

### Browse & Apply

- Search jobs
- Filter jobs
- Save jobs
- Apply for jobs

### Saved Jobs

- View bookmarked jobs
- Remove saved jobs
- Apply directly

### My Applications

- View all applications
- Track application status
- View job details

### Billing

- View current plan
- Upgrade/Downgrade
- Payment history

### Settings

- Update profile
- Upload resume
- Manage skills
- Change password

---

## 🏢 Recruiter Dashboard

### Dashboard Home

- Total Job Posts
- Active Jobs
- Total Applicants
- Closed Jobs
- Applicant Analytics
- Recent Applications

### My Company

- Register company
- Edit company profile
- Company approval status

### Manage Jobs

- View all jobs
- Edit jobs
- Delete jobs
- Close/Reopen jobs

### Post New Job

- Create new job listings
- Set salary range
- Define requirements
- Set application deadline

### View Applicants

- Review applicants
- View resumes
- Update application status

### Billing

- Manage subscription
- View payment history

### Settings

- Update profile
- Manage company

---

## 🛡️ Admin Dashboard

### Dashboard Home

- Total Users
- Total Recruiters
- Total Companies
- Total Jobs
- Revenue Analytics
- Registration Analytics

### Manage Users

- Search users
- Change roles
- Suspend users

### Manage Companies

- Approve companies
- Reject companies

### Manage Jobs

- Monitor jobs
- Remove jobs

### Payments & Subscriptions

- Revenue tracking
- Subscription management

### Settings

- Update admin profile

---

# ⚙️ Settings Management

## 👤 Seeker Settings

- Update name
- Update email
- Update profile photo
- Change password
- Upload resume
- Add skills
- Update bio
- Update professional headline

---

## 🏢 Recruiter Settings

- Update personal information
- Change password
- Manage company profile
- Update company information

---

## 🛡️ Admin Settings

- Update profile
- Change password
- Manage account security

---

# 🔒 Security Features

- JWT Authentication
- Role-Based Access Control (RBAC)
- Protected Routes
- Secure Password Hashing
- Email Notifications
- Secure File Uploads
- Stripe Payment Security

---

# 💻 Technology Stack

## Frontend

- React.js
- Next.js
- Tailwind CSS
- DaisyUI
- Framer Motion
- Recharts

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Stripe

## Deployment

- Vercel
- Render
- MongoDB Atlas

---

<!-- # 📂 Project Structure

```bash
HireLoop
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── hooks
│   │   ├── layouts
│   │   ├── services
│   │   └── utils
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   └── utils
│
└── README.md
``` -->

---

# 🎯 Business Rules

## Seeker Rules

- Free users can apply to up to 3 jobs/month
- Pro users can apply to up to 30 jobs/month
- Premium users have unlimited applications

## Recruiter Rules

- Companies must be approved before posting jobs
- Free plan allows 3 active jobs
- Growth plan allows 10 active jobs
- Enterprise plan allows 50 active jobs

## Payment Rules

- Stripe payment integration
- Upgrade anytime
- Downgrade anytime
- Prorated billing
- 14-day money-back guarantee

---

# 🚀 Future Enhancements

- AI-powered job recommendations
- Resume analysis
- Interview scheduling
- Real-time messaging
- Video interviews
- Job alerts
- Multi-language support

---

# 👨‍💻 Developer

**Amit**

Full-Stack Web Developer

- GitHub: https://github.com/amitchandradas2004
- LinkedIn: https://linkedin.com/in/amitchandradas2004

---

# ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

---

# 📜 License

This project is licensed under the MIT License.
