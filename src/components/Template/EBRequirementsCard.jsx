import React, { useState, useMemo } from 'react'
import { Search, CheckCircle, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { p } from 'framer-motion/client'

// EBRequirementsCard.jsx
// Plain JavaScript React component (no TypeScript). Tailwind CSS utility classes assumed.
// Default export at bottom.

const EB1A_ITEMS = [
  'Receipt of lesser nationally or internationally recognized prizes or awards for excellence in the field of endeavor',
  'Membership in associations in the field, which require outstanding achievements as judged by recognized national or international experts',
  'Published material about the person in professional or major trade publications or other major media',
  "Participation on a panel or individually as a judge of others’ work in the field or a related field",
  'Original scientific, scholarly, artistic, athletic, or business-related contributions of major significance in the field',
  'Authorship of scholarly articles in the field in professional or major trade publications or other major media',
  "Display of the person’s work at artistic exhibitions or showcases",
  'Evidence the person has performed in a leading or critical role for organizations or establishments that have distinguished reputations',
  'Evidence the person has commanded a high salary or other significantly high pay for services',
  'Evidence of commercial successes in the performing arts as shown by box office receipts or music or video sales',
]

const EBNIW_ITEMS = [
  'Peer review/judging the work of others',
  'Conference speaker/ presenter/ organizer/industry volunteering',
  'High salary',
  'Critical role',
  'Scholarship award',
  'Publications',
  'Professional memberships',
  'Certifications',
]

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 bg-primary text-white text-xs px-3 py-1 rounded-full">
      {children}
    </span>
  )
}

function RequirementItem({ text, index, checked, onToggle }) {
  return (
    <li
      className={`group flex items-center gap-4 p-4 rounded-lg border transition-shadow hover:shadow-md ${
        checked ? 'border-emerald-100 bg-tertiary' : 'border-slate-200 bg-white'
      }`}
    >
      <button
        aria-pressed={checked}
        onClick={() => onToggle(index)}
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ring-offset-2 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-colors ${
          checked ? 'bg-emerald-400 text-white' : 'bg-slate-50 text-slate-700'
        }`}
        title={checked ? 'Mark as not satisfied' : 'Mark as satisfied'}
      >
        {checked ? <CheckCircle size={18} /> : <CheckCircle size={18} className="opacity-30" />}
      </button>

      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <p className="text-base font-medium text-slate-900">{text}</p>
        </div>
      </div>
    </li>
  )
}

export default function EBRequirementsCard() {
  const [activeTab, setActiveTab] = useState('eb1a')
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState(true)

  const [checkedEB1A, setCheckedEB1A] = useState(() => Array(EB1A_ITEMS.length).fill(false))
  const [checkedEBNIW, setCheckedEBNIW] = useState(() => Array(EBNIW_ITEMS.length).fill(false))

  const list = activeTab === 'eb1a' ? EB1A_ITEMS : EBNIW_ITEMS
  const checked = activeTab === 'eb1a' ? checkedEB1A : checkedEBNIW

  const filtered = useMemo(() => {
    if (!query) return list.map((text, i) => ({ text, index: i }))
    const q = query.toLowerCase()
    return list
      .map((text, i) => ({ text, index: i }))
      .filter(item => item.text.toLowerCase().includes(q))
  }, [query, list])

  function toggleIndex(i) {
    if (activeTab === 'eb1a') {
      setCheckedEB1A(prev => {
        const copy = [...prev]
        copy[i] = !copy[i]
        return copy
      })
    } else {
      setCheckedEBNIW(prev => {
        const copy = [...prev]
        copy[i] = !copy[i]
        return copy
      })
    }
  }

  const satisfiedCount = checked.filter(Boolean).length

  return (
    <div className="px-[5%] mx-auto pb-6">
      <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        <div className="bg-gradient-to-r from-tertiary via-white to-tertiary p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">EB-1A & EB‑NIW Requirements</h2>
            <p className="mt-1 text-sm text-slate-600">Quick reference and checklist to help prepare supporting evidence for petitions.</p>
            <div className="mt-3 flex items-center gap-2">
              <Pill>
                <strong className="mr-1">Selected:</strong> {satisfiedCount}
              </Pill>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
            <div className="relative">
              <label htmlFor="search" className="sr-only">Search requirements</label>
              <div className="flex items-center bg-white border border-slate-200 rounded-lg px-3 shadow-sm">
                <Search size={16} className="opacity-60" />
                <input
                  id="search"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search requirements..."
                  className="w-[200px] md:w-72 text-sm placeholder:text-slate-400 bg-transparent border-none outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('eb1a')}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'eb1a' ? 'bg-primary text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
              >
                EB‑1A
              </button>
              <button
                onClick={() => setActiveTab('ebniw')}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'ebniw' ? 'bg-primary text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
              >
                EB‑NIW
              </button>
            </div>

            <button
              onClick={() => setExpanded(x => !x)}
              aria-expanded={expanded}
              className="ml-2 p-2 rounded-md bg-white border border-slate-200"
            >
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-6 pb-6 pt-4 bg-white"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  {activeTab === 'eb1a' ? (
                    <div className='mb-4'>
                      <h3 className="font-semibold text-slate-900 mb-2">EB-1A requirements</h3>
                      <p className='text-sm leading-normal text-justify'>Satisfying 3 out of this list of 10 is the minimum requirement to be considered for EB-1A, after which your evidence and arguments are weighed in totality to determine whether you merit approval as a matter of discretion. Meeting the minimum criteria requirements only, does not mean the EB-1A petition will be approved.</p>
                    </div>
                  ) : (
                    <div className='mb-4'>
                      <h3 className="font-semibold text-slate-900 mb-2">EB2-NIW Requirements</h3>
                      <p className='text-sm leading-normal'>In addition to an advanced degree (master&apos;s degree or higher or bachelor&apos;s degree + 5 years post bachelor&apos;s work experience), these are some types of things to show for a chance at success in EB2-NIW.</p>
                    </div>
                  )}
                  <ul className="flex flex-col gap-3">
                    {filtered.length === 0 && (
                      <li className="p-4 rounded-lg border border-slate-100 text-slate-500">No results for &quot;{query}&quot;</li>
                    )}

                    {filtered.map(({ text, index }) => (
                      <RequirementItem
                        key={index}
                        text={text}
                        index={index}
                        checked={checked[index]}
                        onToggle={toggleIndex}
                      />
                    ))}
                  </ul>
                  { activeTab === 'eb1a' && (
                    <p className='text-sm leading-normal mt-4'>If the above standards do not readily apply to your occupation, you may submit comparable evidence.</p>
                  )}
                </div>

                <aside className="rounded-lg p-4 border border-tertiary bg-tertiary">
                  <h3 className="font-semibold text-slate-900">Checklist guidance</h3>
                  <p className="mt-2 text-sm text-slate-600 text-justify">Use this panel to keep notes about types of documents that commonly support each requirement. For example, awards (certificates), nomination letters, editorial clippings, contracts, paystubs, exhibition catalogs, or data showing commercial success.</p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <h4 className="font-medium text-slate-800">Suggested bundle</h4>
                      <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                        <li>One-page summary of evidence</li>
                        <li>Index of exhibits (labelled A–Z)</li>
                        <li>Copies of supporting documents</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-800">Tips</h4>
                      <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                        <li>Prioritize strong third-party evidence over self-authored materials.</li>
                        <li>Where standards don’t fit, submit comparable evidence with explanation.</li>
                        <li>For EB‑1A you must meet at least three of the listed criteria, but final decision considers totality of evidence.</li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>

              <div className="mt-6 ">
                <div className="text-xs text-slate-600">Status: <span className="font-medium text-slate-800">{satisfiedCount} selected</span></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="mt-4 text-center text-sm text-slate-500">Guidance is for checklist organization only and not legal advice.</footer>
    </div>
  )
}