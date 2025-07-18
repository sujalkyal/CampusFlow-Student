<h1 align="left">
  <img src="public/logo_transparent.png" alt="CampusFlow Student" height="40" "/>
  CampusFlow Student
</h1>

A modern, comprehensive student portal designed to streamline academic life with intuitive course management, attendance tracking, and assignment submission features. Built with Next.js and featuring a sleek dark theme with glassmorphism design elements.

## ✨ Features

### 🎯 Core Features
- **Dashboard Overview** - Personalized student dashboard with upcoming sessions and academic statistics
- **Subject Management** - View enrolled subjects with detailed information and navigation
- **Session Tracking** - Real-time upcoming sessions with date, time, and subject details
- **Assignment Submission** - Upload and manage assignment files with EdgeStore integration
- **Attendance Calendar** - Visual attendance tracking with calendar view
- **Notes Access** - Download and view course materials and notes
- **Profile Management** - Edit student details and profile information

### 🔐 Authentication & Security
- **NextAuth Integration** - Secure authentication with email/password
- **Session Management** - Persistent login sessions with automatic redirects
- **Role-based Access** - Student-specific portal with appropriate permissions

### 🎨 User Experience
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Modern dark interface with purple accent colors
- **Smooth Animations** - Framer Motion animations for enhanced UX
- **Glassmorphism UI** - Contemporary glass-effect components
- **Toast Notifications** - Real-time feedback with react-toastify

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.3.1 (React 19.0.0)
- **Styling**: Tailwind CSS 4.1.4
- **Animations**: Framer Motion 12.6.3
- **Icons**: Lucide React 0.487.0
- **Notifications**: React Toastify 11.0.5
- **Charts**: Recharts 2.15.2
- **Date Handling**: Day.js 1.11.13

### Backend & Database
- **Database**: PostgreSQL with Prisma ORM 6.6.0
- **Authentication**: NextAuth.js 4.24.11
- **Password Hashing**: bcrypt 5.1.1
- **HTTP Client**: Axios 1.8.4

### File Storage & Tools
- **File Storage**: EdgeStore 0.3.3
- **Code Formatting**: Prettier 3.5.3
- **Development**: Next.js Dev Server


## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL database
- EdgeStore account for file storage

### 1. Clone the Repository
```bash
git clone https://github.com/sujalkyal/CampusFlow-Student.git
cd CampusFlow-Student
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
EDGE_STORE_ACCESS_KEY=your_edge_store_access_key
EDGE_STORE_SECRET_KEY=your_edge_store_secret_key
DATABASE_URL=postgresql://username:password@localhost:5432/campusflow_student
```
Create a `.env` file in the db directory:
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/campusflow_student
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate --schema=./db/prisma/schema.prisma

# Run database migrations
cd db
npx prisma migrate dev
cd ..
```

### 5. Start Development Server
```bash
npm run dev
# or
yarn dev
```
Visit `http://localhost:3000` to see the application.

## 📱 Usage

### Getting Started
1. **Create Account**: Visit `/auth/signup` to register as a new student
2. **Login**: Access `/auth/signin` with your credentials
3. **Dashboard**: Upon login, you'll be redirected to the main dashboard
4. **Profile Setup**: Complete your profile information in the dashboard

### Key Features Usage
- **View Subjects**: Click on subject cards to access detailed information
- **Check Sessions**: Upcoming sessions are displayed on the dashboard
- **Submit Assignments**: Navigate to session pages to upload assignment files
- **Track Attendance**: Use the attendance calendar to monitor your presence
- **Download Notes**: Access course materials from subject pages

### Demo Credentials
Contact the administrator for demo login credentials.


## 🌐 Deployment

### Vercel Deployment (Recommended)
1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Set all required environment variables in Vercel dashboard
3. **Deploy**: Vercel will automatically build and deploy your application

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```
**Live Demo**: [Deploy your own instance on Vercel](https://vercel.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sujal Kyal**
- GitHub: [@sujalkyal](https://github.com/sujalkyal)
- Full Project Repository: [CampusFlow](https://github.com/sujalkyal/CampusFlow.git)

## 📞 Contact

For questions, suggestions, or support:
- **Email**: sujalkyal.dev@gmail.com
- **Website**: [sujalkyal.dev.in](https://sujaldev-ten.vercel.app/)

## 🙏 Acknowledgments

- **Next.js** team for the excellent framework
- **Vercel** for hosting and deployment platform
- **Prisma** for the powerful ORM
- **EdgeStore** for file storage solutions
- **Tailwind CSS** for the utility-first CSS framework

---

⭐ **Star this repository if you find it helpful!**
