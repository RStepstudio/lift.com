import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, LockKeyhole, MessageSquare } from 'lucide-react'
import './CommunityPages.css'

const ForumSkeleton = () => (
  <div className="forum-skeleton-list" role="status" aria-label="Loading forum threads" aria-busy="true">
    {[0, 1, 2].map((item) => (
      <div className="forum-skeleton-row" key={item}>
        <span className="skeleton-bar skeleton-icon" />
        <span className="skeleton-copy">
          <span className="skeleton-bar skeleton-title" />
          <span className="skeleton-bar skeleton-meta" />
        </span>
        <span className="skeleton-bar skeleton-count" />
      </div>
    ))}
  </div>
)

const PageHeading = ({ eyebrow, title, description }) => (
  <header className="community-page-heading">
    <p className="section-index">{eyebrow}</p>
    <h1>{title}</h1>
    <p>{description}</p>
  </header>
)

const ForumsPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 850)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="community-page">
      <a className="page-back-link" href="/"><ArrowLeft size={16} /> Back to Lift</a>
      <PageHeading
        eyebrow="Lift / Community forums"
        title="The conversation starts here."
        description="Ask questions, share ideas, and help build the Lift community."
      />
      {isLoading ? <ForumSkeleton /> : (
        <section className="community-empty-state" aria-live="polite">
          <MessageSquare size={25} aria-hidden="true" />
          <h2>No threads yet.</h2>
          <p>There’s room for the first conversation. Community posting will open after verified sign-in and moderation are connected.</p>
          <a className="community-page-link" href="https://discord.gg/robloxlift" target="_blank" rel="noopener noreferrer">
            Join the Discord in the meantime <ArrowRight size={16} />
          </a>
        </section>
      )}
      <p className="community-page-footnote"><LockKeyhole size={14} /> Posting will require a verified account. Roblox passwords are never requested here.</p>
    </main>
  )
}

const ArticlePage = () => (
  <main className="community-page article-page">
    <a className="page-back-link" href="/"><ArrowLeft size={16} /> Back to Lift</a>
    <PageHeading
      eyebrow="Lift / Community guide"
      title="The Lift field guide."
      description="A community-built guide to the game, written by players and checked by moderators."
    />
    <section className="community-empty-state article-empty-state">
      <BookOpen size={25} aria-hidden="true" />
      <h2>No community articles yet.</h2>
      <p>Once players publish useful guides, they’ll appear here. We’ll keep this page honest until there are real tips and features to share.</p>
      <a className="community-page-link" href="/forums">Visit the forums <ArrowRight size={16} /></a>
    </section>
    <p className="community-page-footnote">Community-written content will be labeled with its author and publication date.</p>
  </main>
)

const AdminPage = () => (
  <main className="community-page admin-page">
    <a className="page-back-link" href="/"><ArrowLeft size={16} /> Back to Lift</a>
    <PageHeading
      eyebrow="Lift / Administration"
      title="Admin access isn’t configured."
      description="Moderation tools must be protected by server-verified administrator roles before they can manage community content."
    />
    <section className="admin-security-note">
      <LockKeyhole size={20} aria-hidden="true" />
      <p>There is no shared access code or client-side admin bypass. Forum moderation will only be enabled after secure sign-in and role checks are connected.</p>
    </section>
  </main>
)

const PrivacyPage = () => (
  <main className="community-page privacy-page">
    <a className="page-back-link" href="/"><ArrowLeft size={16} /> Back to Lift</a>
    <PageHeading
      eyebrow="Lift / Privacy"
      title="Your data, plainly explained."
      description="This build has no forum accounts, user posts, analytics, or advertising trackers."
    />
    <section className="privacy-details">
      <h2>What this site stores</h2>
      <p>Your consent choice is saved in browser storage. If you allow it, your theme preference is also saved on this device. These preferences are not sent to Lift's server.</p>
      <h2>How to clear it</h2>
      <p>Use Cookie settings below or clear this site's local storage in your browser settings. Without optional theme storage, the theme returns to light when you start a new visit.</p>
      <h2>Cookies and future sign-in</h2>
      <p>This build does not set HTTP cookies. If forum sign-in is added, the service may use a strictly necessary, secure session cookie. Its purpose and duration will be disclosed before the sign-in feature launches.</p>
      <h2>Community data requests</h2>
      <p>Forum accounts and posting are not enabled in this build, so there is no community account data to export or delete yet. If accounts are added, data export and deletion controls should be provided in account settings.</p>
    </section>
  </main>
)

const NotFoundPage = () => (
  <main className="community-page">
    <PageHeading eyebrow="Lift / Not found" title="This stop isn’t on the map." description="The page may have moved or may not exist yet." />
    <a className="community-page-link" href="/">Return to Lift <ArrowRight size={16} /></a>
  </main>
)

const CommunityPages = ({ pathname }) => {
  if (pathname === '/forums') return <ForumsPage />
  if (pathname === '/articles/lift') return <ArticlePage />
  if (pathname === '/admin') return <AdminPage />
  if (pathname === '/privacy') return <PrivacyPage />
  return <NotFoundPage />
}

export default CommunityPages