import { Clock3, ExternalLink, Landmark, Search } from 'lucide-react'

const resources = [
  {
    title: 'Track your case',
    description: 'For people who have filed a change of immigration status and want to follow their progress.',
    href: 'https://egov.uscis.gov',
    action: 'egov.uscis.gov',
    icon: Search,
  },
  {
    title: 'Check processing times',
    description: 'See how long a particular case type usually takes before USCIS sends an official update.',
    href: 'https://egov.uscis.gov/processing-times',
    action: 'Processing times',
    icon: Clock3,
  },
  {
    title: 'Visit USCIS.gov',
    description: 'The general USCIS website, for any other official immigration information you need.',
    href: 'https://www.uscis.gov',
    action: 'uscis.gov',
    icon: Landmark,
  },
]

const UscisResourceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {resources.map(({ title, description, href, action, icon: Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col rounded-[18px] border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="mb-3 text-[22px] font-medium leading-tight text-secondary">{title}</h3>
          <p className="mb-8 flex-1 leading-relaxed text-gray">{description}</p>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-secondary">
            {action}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  )
}

export default UscisResourceCards
