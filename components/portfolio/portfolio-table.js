import Badge from './portfolio-badge'

export default function Example(props) {
  const { content } = props

  return (
    <div className="overflow-hidden bg-slate-900 shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 text-sky-100">
        <h3 className="text-lg font-bold leading-6">Personal details and application.</h3>
      </div>
      <div>
        <dl>
          <div className="bg-slate-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold text-slate-900">Full name</dt>
            <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">{content.name}</dd>
          </div>
          <div className="bg-slate-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold text-slate-900">Application for</dt>
            <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">{content.position}</dd>
          </div>
          <div className="bg-slate-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold text-slate-900">Email address</dt>
            <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">{content.email}</dd>
          </div>
          <div className="bg-slate-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold text-slate-900">Location</dt>
            <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">{content.address}</dd>
          </div>
          <div className="bg-slate-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold text-slate-900">About</dt>
            <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
              {content.description}
            </dd>
          </div>
          <div className="bg-slate-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold text-slate-900">Skills</dt>
            <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0 flex flex-wrap">
              {content.skills.map(skill => <Badge key={skill}>{skill}</Badge>)}
            </dd>
          </div>
          <div className="bg-slate-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-bold text-slate-900">Resume</dt>
            <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 text-sm">
                  <div className="flex flex-1 items-center">
                      <a
                        href="/portfolio_compressed.pdf"
                        target="_blank"
                        className="font-bold inline-flex items-center text-emerald-600 px-3 py-2 bg-emerald-600/10 hover:bg-emerald-600/20 rounded"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                        </svg>
                        resume.pdf
                      </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
