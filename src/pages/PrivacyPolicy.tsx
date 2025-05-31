import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | RG Infra Developers";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We may collect personal information such as your name, email address, phone number, 
              and other contact details when you interact with our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to provide and improve our services, 
              communicate with you, and for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information 
              from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. Any changes will be posted on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;