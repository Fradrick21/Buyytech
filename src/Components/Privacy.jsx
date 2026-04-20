import React from 'react'

const Privacy = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="w-full px-6 md:px-12">
        <div className="w-full rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Your privacy matters to us
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            This is dummy privacy content for your website. It explains, in a simple way,
            how information may be collected, used, and protected while users browse and
            shop on your platform.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                We may collect basic details such as your name, email address, phone number,
                delivery address, and order history when you create an account or place an order.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">How We Use It</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                We use your information to process orders, improve customer support, send updates,
                and provide a smoother shopping experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Data Protection</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Your data is stored securely and is only accessed when needed to support our services.
                We take reasonable steps to help protect your information from unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Cookies may be used to remember preferences, analyze site performance, and improve
                your experience on the website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                If you have any questions about this privacy page, please contact our support team
                at support@example.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Privacy
