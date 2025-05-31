import { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | RG Infra Developers";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals to join our growing team.
            Check back soon for current job openings.
          </p>
          <p className="text-gray-600">
            In the meantime, you can send your resume to our HR department at:
            <a href="mailto:hr@rginfradevelopers.com" className="text-primary-blue ml-2">
              hr@rginfradevelopers.com
            </a>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-primary-gold mr-2">✓</span>
              Competitive salaries and benefits
            </li>
            <li className="flex items-start">
              <span className="text-primary-gold mr-2">✓</span>
              Opportunities for professional growth
            </li>
            <li className="flex items-start">
              <span className="text-primary-gold mr-2">✓</span>
              Dynamic and supportive work environment
            </li>
            <li className="flex items-start">
              <span className="text-primary-gold mr-2">✓</span>
              Work on prestigious projects
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Careers;