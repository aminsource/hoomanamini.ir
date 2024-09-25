import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'

  // Add sticky nav class if applicable
  if (siteMetadata?.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    // Ensure RTL compatibility by setting dir attribute at the top level
    <header className={headerClass} dir="rtl">
      <Link href="/" aria-label={siteMetadata?.headerTitle || 'Home'}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            {' '}
            {/* Adjusted margin for RTL */}
            <Logo aria-hidden="true" /> {/* Added aria-hidden for decorative logo */}
          </div>
          {typeof siteMetadata?.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata?.headerTitle
          )}
        </div>
      </Link>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks?.length > 0 &&
            headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="ml-4 block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400 "
                >
                  {link.title}
                </Link>
              ))}
        </div>

        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
