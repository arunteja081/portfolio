import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { REPOSITORIES_DATA } from '../data/constants'
import { FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi'

const ContributionGraph = () => {
  const weeks = 52
  const days = 7
  const contributions: number[][] = []

  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < days; d++) {
      const recencyFactor = w / weeks
      const randomFactor = Math.random()
      const dayFactor = d >= 1 && d <= 5 ? 1.5 : 0.5

      const level = Math.floor(randomFactor * recencyFactor * dayFactor * 5)
      week.push(Math.min(level, 4))
    }
    contributions.push(week)
  }

  const getColor = (level: number) => {
    const colors = [
      'bg-dark-800',
      'bg-accent-500/20',
      'bg-accent-500/40',
      'bg-accent-500/60',
      'bg-accent-500',
    ]
    return colors[level] || colors[0]
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card p-6 mb-8 overflow-x-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold font-display text-dark-100">
          Contribution Activity
        </h3>
        <span className="text-sm text-dark-500">Last 12 months</span>
      </div>

      <div className="flex mb-1 ml-8">
        {months.map((month, i) => (
          <span
            key={month}
            className="text-[10px] text-dark-500"
            style={{ width: `${100 / 12}%` }}
          >
            {i % 2 === 0 ? month : ''}
          </span>
        ))}
      </div>

      <div className="flex gap-[3px]">
        <div className="flex flex-col gap-[3px] mr-1">
          {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
            <span key={i} className="text-[10px] text-dark-500 h-[12px] leading-[12px]">
              {day}
            </span>
          ))}
        </div>

        {contributions.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <motion.div
                key={`${wi}-${di}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: wi * 0.005 + di * 0.01 }}
                className={`w-[12px] h-[12px] rounded-[2px] ${getColor(level)} hover:ring-1 hover:ring-accent-400/50 transition-all cursor-pointer`}
                title={`${level} contributions`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-3">
        <span className="text-[10px] text-dark-500">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-[12px] h-[12px] rounded-[2px] ${getColor(level)}`}
          />
        ))}
        <span className="text-[10px] text-dark-500">More</span>
      </div>
    </motion.div>
  )
}

const GitHub = () => {
  return (
    <SectionWrapper id="github">
      <SectionHeading
        badge="Open Source"
        title="GitHub Activity"
        subtitle="Contribution graph and featured repositories showcasing my development activity."
      />

      <ContributionGraph />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {REPOSITORIES_DATA.map((repo, index) => (
          <motion.a
            key={repo.name}
            href={`https://github.com/aruntejavemunuri/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card glass-card-hover gradient-border p-5 group block"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-dark-400" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                </svg>
                <h4 className="text-sm font-semibold text-accent-500 group-hover:text-accent-400 transition-colors truncate">
                  {repo.name}
                </h4>
              </div>
              <FiExternalLink className="w-4 h-4 text-dark-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <p className="text-sm text-dark-400 leading-relaxed mb-4 line-clamp-2">
              {repo.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-dark-500">
              <span className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: repo.languageColor }}
                />
                {repo.language}
              </span>
              <span className="flex items-center gap-1">
                <FiStar size={13} />
                {repo.stars}
              </span>
              <span className="flex items-center gap-1">
                <FiGitBranch size={13} />
                {repo.forks}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default GitHub
