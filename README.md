# Startup Internship Application Portal

A modern, production-ready React application for managing startup internship applications. Built with Vite, React Router, Tailwind CSS, Framer Motion, and Axios.

## 🚀 Features

✅ **Multi-step Application Form** - Progressive form with validation and error handling
✅ **Real-time Application Status Tracking** - Progress bar and status badge in navbar
✅ **Role Details & Benefits** - Interactive role explorer with detailed information
✅ **Form State Persistence** - Application data preserved across pages using React Context
✅ **Celebratory Success Page** - Animated confetti and detailed next steps
✅ **Responsive Design** - Mobile, tablet, and desktop optimized
✅ **Smooth Animations** - Framer Motion transitions throughout the app
✅ **API Integration Ready** - Axios service for backend integration
✅ **Professional UI/UX** - Startup-style design with modern colors and spacing

## 📋 Pages & Routes

- **`/`** - Home page with hero, role explorer, and benefits
- **`/apply`** - Multi-step application form (3 steps)
- **`/review`** - Review submitted data before final submission
- **`/success`** - Confirmation page with application ID and next steps

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS with custom brand colors
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **State Management:** React Context (Form + Application Status)
- **Build Tool:** Vite (fast, optimized bundling)

## 🏃 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation & Run

```bash
# Clone/navigate to project
cd d:\webpage\startup-internship-portal

# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.jsx       # Animated button with Framer Motion
│   ├── Input.jsx        # Form input with validation styles
│   ├── MultiSelect.jsx  # Skill selector with animations
│   ├── Navbar.jsx       # Top navigation with status tracking
│   └── Loader.jsx       # Loading spinner for submission
├── pages/               # Page components
│   ├── Home.jsx         # Hero + role details (scrollable)
│   ├── Apply.jsx        # 3-step form with validation
│   ├── Review.jsx       # Review & submit data
│   └── Success.jsx      # Confirmation with confetti
├── context/             # Global state
│   ├── FormContext.jsx  # Form data (useForm hook)
│   └── ApplicationStatusContext.jsx # Application status tracking
├── services/
│   └── api.js           # Axios instance & submitApplication()
├── App.jsx              # Router setup with page transitions
├── main.jsx             # Entry point with providers
└── index.css            # Tailwind + custom styles
```

## 🎨 Key Features Explained

### 1. Multi-Step Form with Step-by-Step Validation
- Step 1: Basic info (name, email, phone, role)
- Step 2: Skills, experience, portfolio, resume
- Step 3: Final review before submission
- Each step validates only its own fields (no premature errors)

### 2. Application Status Tracking
- Navbar shows real-time progress percentage
- Status badges update: "Applying..." → "Review" → "Pending" → "Accepted!"
- Progress bar shows completion

### 3. Interactive Role Explorer
Click on any role on the home page to view:
- Role details and salaries
- Key benefits (5+ per role)
- Requirements and tech stack
- Direct "Apply" button for that role

### 4. Form State Persistence
Data survives navigation between pages using `useForm()` Context hook:
```javascript
const { data, update, reset } = useForm()
update({ fullName: 'John Doe' })  // Updates form data
```

### 5. Application Status Context
Track where user is in the application flow:
```javascript
const { status, updateStep, submitApplication } = useApplicationStatus()
// status = { step, completionPercentage, submittedAt, applicationId, error }
```

## 🔌 API Integration

### Mock API (Default)
Currently uses JSONPlaceholder as a mock backend. All data is accepted.

### Connect to Real Backend
Edit `.env`:
```
VITE_API_URL=https://your-backend.com
```

Then modify `src/services/api.js`:
```javascript
export const submitApplication = (payload) => 
  api.post('/applications', payload)  // Change endpoint
```

## 🎭 Animation Examples

- **Page Transitions** - Fade in/out when navigating
- **Step Progress** - Smooth circle fill as user progresses
- **Button Interactions** - Scale + hover effects with Framer Motion
- **Form Inputs** - Staggered entrance animations
- **Success Confetti** - Animated falling confetti pieces
- **Role Cards** - Hover scale and smooth transitions

## 🛡️ Form Validation

- **Full Name** - Required, any length
- **Email** - Valid email format required
- **Phone** - Valid phone format (7-15 digits)
- **Skills** - At least 1 skill required
- **Portfolio** - Optional but must start with http/https if provided
- **Resume** - Optional file upload

Error messages appear inline with red styling and are cleared on successful step advancement.

## 🌈 Design Tokens

### Color Palette
- **Primary Blue** - `brand-500` / `#2b6ef6`
- **Dark Blue** - `brand-700` / `#1449b8`
- **Light Blue** - `brand-100` / `#e6f0ff`
- **Slate Text** - `slate-900` / `#0f172a`
- **Slate Border** - `slate-300` / `#cbd5e1`

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 💡 Next Steps (Optional Enhancements)

- [ ] Add localStorage draft saving
- [ ] Implement real file upload to S3
- [ ] Add email notifications
- [ ] Create admin dashboard for applications
- [ ] Add SMS verification
- [ ] Implement interview scheduling
- [ ] Add email templates for status updates
- [ ] Database integration with real backend

## 🚨 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Form not submitting?**
- Check browser console for errors
- Verify `.env` VITE_API_URL is correct
- Check network tab in DevTools

**Styles not updating?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📝 License

MIT - Feel free to use this as a template for your own projects!

---

Built with ❤️ for modern startups. Questions? Check the [code comments](src/) or file issues on GitHub.
