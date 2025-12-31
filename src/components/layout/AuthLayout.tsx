import * as React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-screen overflow-hidden flex selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-surface-dark overflow-hidden group/hero">
        <img
          alt="Night football stadium pitch with lights"
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover/hero:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFMqgKPq4TOtwI-pgYVX8Yh6_5Lgb_Zs_Sd5ngIJ1FHxRbj_fyd0l0a50vYpXZ0Aqu_-WWlUzDEty_jkvD9jJt3M_tGx6qTeKgTGTV7e4r0bmqaQGCpayrbKCgFgR-LEy_nQ5yXWuPTvU3t7LkDpcp49LhUix7SwS9drGqMhGtuE0oBepwEjzjuPGvnQNwXh-jhCEdTc1MQKUsPdlohnmocAVWGmFbFmT2NrwC4biZpw5J2Ja1wH0T9GDcpIiumYXBmzLt_kYw0jU"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/40 to-background-dark/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
        <div className="relative z-10 flex flex-col justify-end p-16 w-full text-white">
          <h2 className="text-4xl font-bold mb-4 leading-tight">The game starts here.</h2>
          <p className="text-lg opacity-90 max-w-md font-light">
            Join the largest community of players and pitch owners in Algeria. Book your next match in seconds.
          </p>
          <div className="flex gap-4 mt-10 items-center">
            <div className="flex -space-x-4">
              <img
                alt="User avatar 1"
                className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXjIWK2L9W0OXOVyNL1Ru3grQyKqg2V3Md7jyqmszcKAV7tyJ1J-VjVhW2SdiG2U2aI32BZVIe0iHFNA1-Zya0JGinHRKUyUL_l25OzAbiQEkJNs8OKi8iWUlhpSvPMK96rwu4N3FstPSq21ZVrLfiGmcyqZXQo4bV-8SGbOuE0ONAiCxK2Q7nCKxjaBJsnjiZ-HejfGu8ibbiFGgIUyJAOIVHbq8BqH-Nz84vGt5SlEZ1J00bKzBkbzxy0fLsF6DnwaNzYiDr_l4"
              />
              <img
                alt="User avatar 2"
                className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCewi5K_yS-9XmNapZfHL7Xx1rXRguunC_JHbL-CZuACizlgpWyj43KIY7LQKT-31EuGFy1bZv7bCqwWrs6vNVcS1FF5ZdH0Lk4aHudDpNAsR0-ndQalY5S63UYUWo7d0V0INfiP24EqOC3CUnQVXLDFDT2nrqAIENBLb8FP0Xfxr8Gam7klmZnQNYuLYoW0rHy6GPVn0O-c0jQMfP4JjIKIFOorVbGBq7SjUu7xCQtdlk-bWDGRoOOsTq1MN5cjEGAKgHBhLvl2cI"
              />
              <img
                alt="User avatar 3"
                className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqragJ-4XVDy5Zgp5Vmx1TSapmcaeOaqtP1wHsGzMYyYhB9L7Kq_ugE6T-QBM0FwZ49MnKVsic5lpv8PJxlinFyC9l6E1kFYRkpVetNSerIgQaoOmqRo3ABr85xRFPFputjofBlEb6g3St2mhqNhWI_mjSVTcsQqiFJPNoknGfbvd0wSjsSyhKkGWuJnfBcYL5YqHvjmiignne9YpJd-m5Q2NyAD7fGiU296L0mLcztgbHb_juhR3vhQD91G0d8qLxVLk2KcS-pUs"
              />
            </div>
            <div className="flex flex-col justify-center pl-2">
              <div className="flex items-center gap-0.5 text-primary-dark lg:text-yellow-400">
                <span className="material-symbols-outlined text-[20px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <span className="text-sm font-medium text-white/80">Trusted by 10k+ players</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col h-full overflow-y-auto bg-surface-light dark:bg-background-dark relative">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-center bg-cover mix-blend-multiply dark:mix-blend-lighten" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFMqgKPq4TOtwI-pgYVX8Yh6_5Lgb_Zs_Sd5ngIJ1FHxRbj_fyd0l0a50vYpXZ0Aqu_-WWlUzDEty_jkvD9jJt3M_tGx6qTeKgTGTV7e4r0bmqaQGCpayrbKCgFgR-LEy_nQ5yXWuPTvU3t7LkDpcp49LhUix7SwS9drGqMhGtuE0oBepwEjzjuPGvnQNwXh-jhCEdTc1MQKUsPdlohnmocAVWGmFbFmT2NrwC4biZpw5J2Ja1wH0T9GDcpIiumYXBmzLt_kYw0jU')" }}></div>
        <div className="absolute top-0 right-0 p-0 overflow-hidden pointer-events-none opacity-40">
          <div className="w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        {/* Header (Logo + Help) */}
        <div className="p-6 lg:p-12 flex justify-between items-center z-10">
            <div className="flex items-center gap-3">
                <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30">
                    <span className="material-symbols-outlined text-2xl">sports_soccer</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">DZPlay</h1>
            </div>
            <a className="text-sm font-semibold text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors" href="#">
                Help
            </a>
        </div>

        {/* Main Form Content */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-24 max-w-2xl mx-auto w-full pb-12 z-10">
            {children}
        </div>
      </div>
    </div>
  )
}
