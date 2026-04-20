import React from 'react'

const Terms = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="w-full px-6 md:px-12">
        <div className="w-full rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Terms & Conditions
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Please read these terms carefully
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            This is dummy terms content for your website. It gives users a simple overview of
            how the site may be used and what rules apply while browsing, registering, or shopping.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Use of the Website</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                By accessing this website, you agree to use it only for lawful purposes and in a way
                that does not harm the site, its users, or its services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Account Responsibility</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                If you create an account, you are responsible for keeping your login details secure
                and for all activity that happens under your account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Orders and Payments</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                All orders are subject to availability and confirmation. Prices, discounts, and offers
                may change without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Shipping and Returns</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Estimated delivery times are provided for convenience only. Return eligibility may
                depend on the product type, condition, and return policy in effect at the time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Changes to Terms</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                We may update these terms from time to time. Continued use of the website means you
                accept any updated version of the terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terms
