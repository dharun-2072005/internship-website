# Component API Reference

## Context Hooks

### `useForm()`
Access and update form data across pages.

```javascript
import { useForm } from '@/context/FormContext'

const { data, update, reset } = useForm()

// Get current form data
console.log(data.fullName, data.email, data.skills)

// Update specific fields
update({ fullName: 'John Doe' })
update({ skills: ['React', 'Node.js'] })

// Reset to initial state
reset()
```

**Data Structure:**
```javascript
{
  fullName: '',
  email: '',
  phone: '',
  role: 'Frontend',
  skills: [],
  experience: 'Junior',
  portfolio: '',
  resume: null,
}
```

---

### `useApplicationStatus()`
Track application progress and status.

```javascript
import { useApplicationStatus } from '@/context/ApplicationStatusContext'

const { status, updateStep, submitApplication, reset } = useApplicationStatus()

// Check current status
console.log(status.step)                    // 'home' | 'applying' | 'review' | 'submitted' | 'success'
console.log(status.completionPercentage)    // 0-100
console.log(status.applicationId)           // 'APP-1234567890'
console.log(status.submittedAt)             // ISO timestamp

// Move to next step
updateStep('applying')       // 0%
updateStep('applying')       // 33%
updateStep('review')         // 66%
updateStep('submitted')      // 95%
updateStep('success')        // 100%

// Record submission
submitApplication()  // Sets submittedAt, generates applicationId

// Reset status
reset()  // Back to home, 0%
```

---

## UI Components

### `Button`
Animated button with Framer Motion hover effects.

```javascript
import Button from '@/components/Button'

<Button onClick={handleClick}>
  Submit →
</Button>

<Button disabled>
  Loading...
</Button>

<Button className="w-full">
  Full width button
</Button>
```

**Props:**
- `children` (React.ReactNode) - Button text/content
- `className` (string) - Extra CSS classes (appended to base)
- All standard `<button>` props supported
- Disabled state handled automatically

---

### `Input`
Form input with label, validation, and Framer Motion animations.

```javascript
import Input from '@/components/Input'

<Input
  id="email"
  label="Email Address"
  type="email"
  placeholder="your@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}  // Error message or null
/>
```

**Props:**
- `id` (string, required) - HTML id attribute
- `label` (string, required) - Form label text
- `error` (string | null) - Error message or falsy
- `value` (string) - Input value
- `onChange` (function) - Change handler
- `placeholder` (string) - Placeholder text
- All standard `<input>` props supported

---

### `MultiSelect`
Skill selector with multiple selections and animations.

```javascript
import MultiSelect from '@/components/MultiSelect'

const skills = ['React', 'Node.js', 'TypeScript', 'Python']
const [selected, setSelected] = useState([])

<MultiSelect
  options={skills}
  value={selected}
  onChange={setSelected}
/>
```

**Props:**
- `options` (string[]) - Array of skill names
- `value` (string[]) - Currently selected skills
- `onChange` (function) - Handler that receives new selection array

---

### `Navbar`
Application navigation with status tracking and progress bar.

```javascript
// Automatically connected to ApplicationStatus context
// Shows: Logo, navigation links, status badge, progress bar
// Updates in real-time as user progresses through form
```

**Features:**
- Logo & branding
- Nav links (Home, Apply, Review)
- Status badge with animated dot
- Progress percentage
- Sticky positioning
- Responsive design

---

### `Loader`
Animated loading spinner.

```javascript
import Loader from '@/components/Loader'

{isLoading && <Loader />}

// Or inside button
<Button disabled>
  {loading ? <Loader /> : 'Submit'}
</Button>
```

---

## Pages

### `Home.jsx`
Landing page with hero, role explorer, and benefits.

**Features:**
- Hero section with CTA
- Benefit cards (8 items)
- Interactive role explorer
  - Click role to see: title, benefits, requirements, salary
  - Animated transitions between roles
  - Direct apply button per role
- Final CTA section

**Role Details Structure:**
```javascript
{
  id: 'frontend',
  title: 'Frontend Engineer',
  icon: '🎨',
  description: 'Build beautiful UIs',
  benefits: ['Master React', 'Ship production...', ...],
  requirements: 'HTML, CSS, React...',
  salary: '$5,000 - $8,000/month'
}
```

---

### `Apply.jsx`
Multi-step application form.

**Step 1:**
- Full Name (text input)
- Email (text input)
- Phone (text input)
- Role (radio buttons: Frontend, Backend, Full Stack, AI)

**Step 2:**
- Skills (multi-select)
- Experience Level (dropdown: Junior, Mid, Senior)
- Portfolio/GitHub (text input, optional)
- Resume Upload (file input, optional)

**Step 3:**
- Data preview
- Edit buttons
- Submit button

**Features:**
- Per-step validation (only validates current step)
- Clear error messages
- Progress indicator
- Step headings with emojis
- Smooth transitions

---

### `Review.jsx`
Review and submit application.

**Displays:**
- Full Name with edit link
- Contact (email + phone) with edit link
- Role & Experience with edit link
- Skills with edit link
- Portfolio with edit link
- Resume preview

**Features:**
- Hover effects on review cards
- Resume sidebar
- Terms acceptance
- Error display area
- Back to Edit button
- Submit button with loading state

---

### `Success.jsx`
Confirmation page with celebration.

**Displays:**
- Animated success icon (green checkmark)
- Applicant name
- Application details card:
  - Role applying for
  - Experience level
  - Email on file
  - Application ID (APP-1234567890)
- Next steps timeline
- Pro tips for selected candidates
- Back to home button
- Follow us CTA
- Animated confetti (50 pieces)

---

## Services

### `api.js`
Axios instance configured for API calls.

```javascript
import { submitApplication } from '@/services/api'

try {
  const response = await submitApplication(formData)
  console.log(response.data)
} catch (error) {
  console.error(error.message)
}
```

**Configuration:**
- Base URL: `import.meta.env.VITE_API_URL`
- Timeout: 10 seconds
- Unified error handling
- Auto-rejects with error shape

**Form Data Payload:**
```javascript
{
  fullName: string,
  email: string,
  phone: string,
  role: 'Frontend' | 'Backend' | 'Full Stack' | 'AI',
  skills: string[],
  experience: 'Junior' | 'Mid' | 'Senior',
  portfolio: string,
  resumeName: string | null
}
```

---

## Routing

Uses React Router v6:

```
/                    → Home page
  ├─ Hero section
  ├─ Why join section
  └─ Role explorer

/apply               → Application form (3 steps)
  ├─ Step 1: Personal info
  ├─ Step 2: Skills & experience
  └─ Step 3: Review

/review              → Review submitted data
  └─ Submit button

/success             → Confirmation page
  └─ Application ID display
```

---

## Tailwind Custom Classes

### Color Variables
```css
brand-50: #f5f8ff
brand-100: #e6f0ff
brand-300: #7da7ff
brand-500: #2b6ef6    ← Primary
brand-700: #1449b8    ← Dark
```

### Usage
```jsx
<div className="bg-brand-500 text-white">Primary blue</div>
<div className="border-brand-300">Light border</div>
```

---

## Common Patterns

### Form Handling Pattern
```javascript
const { data, update } = useForm()
const [errors, setErrors] = useState({})

const validate = () => {
  const newErrors = {}
  if (!data.fullName) newErrors.fullName = 'Required'
  return newErrors
}

const handleSubmit = () => {
  const err = validate()
  if (Object.keys(err).length) {
    setErrors(err)
    return
  }
  // Submit...
}
```

### Progress Tracking Pattern
```javascript
const { updateStep, status } = useApplicationStatus()

useEffect(() => {
  updateStep('applying')
}, [])

return (
  <div>
    {status.completionPercentage}%
  </div>
)
```

### Animation Pattern (Framer Motion)
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

## Environment Variables

`.env` file:
```
VITE_API_URL=https://jsonplaceholder.typicode.com
```

Accessed in code:
```javascript
import.meta.env.VITE_API_URL
```

---

## Best Practices

✅ **DO:**
- Use `useForm()` for form data
- Use `useApplicationStatus()` for tracking
- Validate per-step in forms
- Show loading states during submission
- Use Framer Motion for animations
- Keep components small and focused

❌ **DON'T:**
- Store form data in local `useState`
- Validate all fields at once
- Hardcode API URLs
- Forget to clear errors on valid input
- Use heavy re-renders without memo

---

## Performance Tips

1. **Memoize Callbacks:**
   ```javascript
   const handleChange = useCallback(() => {
     update({ fullName: e.target.value })
   }, [update])
   ```

2. **Memoize Components:**
   ```javascript
   const Input = React.memo(({ label, ...props }) => ...)
   ```

3. **Memoize Expensive Calculations:**
   ```javascript
   const skillList = useMemo(() => skillOptions, [])
   ```

4. **Lazy Load Images:**
   ```javascript
   <img loading="lazy" src="..." />
   ```

---

## Debugging

Open browser DevTools:

**Chrome DevTools:**
1. F12 → Console tab
2. Check for JS errors
3. Network tab for API calls
4. Application tab → Local Storage (form state)

**React DevTools:**
1. Install React DevTools extension
2. Inspect components
3. Check useForm and useApplicationStatus state
4. Monitor re-renders

---

For more info, check individual file comments in src/
