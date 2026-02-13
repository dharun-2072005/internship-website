import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const roleDetails = [
  {
    id: 'frontend',
    title: 'Frontend Engineer',
    icon: '🎨',
    description: 'Build beautiful, responsive user interfaces',
    benefits: [
      'Master React, TypeScript, and modern web frameworks',
      'Ship production UIs used by thousands of users',
      'Learn design systems and accessibility best practices',
      'Mentor from experienced product designers and engineers',
      '3-month flexible internship (full-time or part-time)'
    ],
    requirements: 'Proficiency in HTML, CSS, JavaScript/React. Portfolio or GitHub projects required.',
    salary: '$5,000 - $8,000/month'
  },
  {
    id: 'backend',
    title: 'Backend Engineer',
    icon: '⚙️',
    description: 'Build scalable APIs and data infrastructure',
    benefits: [
      'Design and deploy production-grade API systems',
      'Work with modern stacks: Node.js, Python, Go, or Rust',
      'Learn database optimization, caching, and microservices',
      'Contribute to core business logic and architecture',
      'Remote-friendly, flexible hours'
    ],
    requirements: 'Strong programming fundamentals. Experience with REST APIs or databases. Portfolio on GitHub.',
    salary: '$5,500 - $8,500/month'
  },
  {
    id: 'fullstack',
    title: 'Full Stack Engineer',
    icon: '🚀',
    description: 'Own entire product features end-to-end',
    benefits: [
      'Take features from zero to launch independently',
      'Master both frontend and backend technologies',
      'Understand how businesses scale tech',
      'Join a small team and have direct impact on product',
      'Potential full-time offer based on performance'
    ],
    requirements: 'Solid understanding of client-server architecture. Experience shipping projects (personal or academic). Git proficiency.',
    salary: '$6,000 - $9,000/month'
  },
  {
    id: 'ai',
    title: 'AI/ML Engineer',
    icon: '🤖',
    description: 'Build intelligent features with machine learning',
    benefits: [
      'Work on real-world ML problems and datasets',
      'Learn LLM integration, fine-tuning, and RAG systems',
      'Deploy models to production and optimize for scale',
      'Collaborate with product teams on AI features',
      'Stay ahead of AI trends in an accelerated program'
    ],
    requirements: 'Python proficiency, understanding of ML fundamentals. Experience with PyTorch, TensorFlow, or scikit-learn.',
    salary: '$6,000 - $9,500/month'
  }
]

export default function Home() {
  const [activeRole, setActiveRole] = React.useState('frontend')
  const currentRole = roleDetails.find(r => r.id === activeRole)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-4 px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-semibold">
              🚀 Now Hiring · 2026 Cohort
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-4">
              Launch Your Career at a <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">Startup</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
              Join our selective 3-month internship program. Work on real products, ship real code, and get mentorship from founding teams. No boring projects—just meaningful work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Apply Now
                <span>→</span>
              </Link>
              <a
                href="#roles"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all duration-200"
              >
                Explore Roles
              </a>
            </div>
            <motion.div
              className="mt-10 grid grid-cols-3 gap-4 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="p-3 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-brand-600">120+</div>
                <div className="text-xs text-slate-600 mt-1">Applications</div>
              </motion.div>
              <motion.div variants={itemVariants} className="p-3 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-brand-600">85%</div>
                <div className="text-xs text-slate-600 mt-1">Conversion Rate</div>
              </motion.div>
              <motion.div variants={itemVariants} className="p-3 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-brand-600">3mo</div>
                <div className="text-xs text-slate-600 mt-1">Flexible Duration</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-100 to-brand-50 rounded-3xl blur-3xl opacity-50" />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
              alt="Startup team"
              className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Why Join Us?</h2>
            <p className="text-lg text-slate-600">More than just an internship—a launchpad for your tech career.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: '💡', title: 'Real Impact', desc: 'Work on features used by real users in production' },
              { icon: '👥', title: 'Mentorship', desc: 'Learn directly from founding teams and senior engineers' },
              { icon: '💰', title: 'Competitive Pay', desc: 'Top-tier internship stipends + potential conversion' },
              { icon: '🌍', title: 'Remote-First', desc: 'Work from anywhere, collaborate with distributed teams' },
              { icon: '📈', title: 'Career Growth', desc: 'Build skills fast in a fast-paced environment' },
              { icon: '🤝', title: 'Network', desc: 'Connect with founders, investors, and fellow interns' },
              { icon: '📚', title: 'Learning', desc: 'Master cutting-edge tech and best practices' },
              { icon: '🎯', title: 'References', desc: 'Stand out to future employers and investors' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-semibold text-slate-900 mb-2">{item.title}</div>
                <div className="text-sm text-slate-600">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Roles We're Hiring For</h2>
          <p className="text-lg text-slate-600">Click on a role to learn more about the position and its benefits</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Role Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-3"
          >
            {roleDetails.map((role) => (
              <motion.button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  activeRole === role.id
                    ? 'border-brand-500 bg-brand-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{role.icon}</span>
                  <div>
                    <div className="font-semibold text-slate-900">{role.title}</div>
                    <div className="text-xs text-slate-500">{role.description}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Role Details */}
          {currentRole && (
            <motion.div
              key={currentRole.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{currentRole.icon}</span>
                    <h3 className="text-3xl font-bold text-slate-900">{currentRole.title}</h3>
                  </div>
                  <p className="text-lg text-brand-600 font-semibold">{currentRole.salary}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {currentRole.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <span className="text-brand-500 font-bold text-lg mt-1">✓</span>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Requirements</h4>
                  <p className="text-slate-700 leading-relaxed">{currentRole.requirements}</p>
                </div>

                <Link
                  to="/apply"
                  className="inline-flex items-center justify-center gap-2 w-full bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  Apply for {currentRole.title.split(' ')[0]}
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-800 py-20 mt-20 rounded-3xl mx-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Launch Your Career?</h2>
          <p className="text-lg mb-8 opacity-90">Join the 2026 cohort and get mentorship from founders and investors. Applications close March 31.</p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transform transition-all"
          >
            Apply Now
            <span>→</span>
          </Link>
        </motion.div>
      </section>
    </motion.main>
  )
}
