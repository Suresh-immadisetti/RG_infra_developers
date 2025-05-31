import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ClientsSection from '../components/ClientsSection';
import CtaSection from '../components/CtaSection';
import { useEffect, useState, KeyboardEvent } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Home = () => {
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Hello! I'm RG Infra's virtual assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [userMessage, setUserMessage] = useState<string>('');

  useEffect(() => {
    // Set document title for the home page
    document.title = "RG Infra Developers | Premium Real Estate";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;
    
    // Add user message
    const newUserMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: userMessage,
      sender: 'user'
    };
    setChatMessages([...chatMessages, newUserMessage]);
    setUserMessage('');
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Thank you for your message! Our team will get back to you shortly.",
        "For immediate assistance, you can contact us directly at 9966966863.",
        "Would you like information about our ongoing projects?",
        "You can also reach us via WhatsApp by clicking the WhatsApp button below."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const newBotMessage: ChatMessage = {
        id: chatMessages.length + 2,
        text: randomResponse,
        sender: 'bot'
      };
      setChatMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ClientsSection />
      <CtaSection />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919966966863" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* Chatbot Floating Button and Interface */}
      <div className="fixed bottom-6 right-24 z-50">
        {showChatbot ? (
          <div className="w-80 bg-white rounded-t-lg shadow-xl overflow-hidden">
            {/* Chatbot Header */}
            <div className="bg-primary-blue text-white p-3 flex justify-between items-center">
              <h3 className="font-medium">RG Infra Assistant</h3>
              <button 
                onClick={() => setShowChatbot(false)}
                className="text-white hover:text-primary-gold"
                aria-label="Close chatbot"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="h-64 p-4 overflow-y-auto bg-gray-50">
              {chatMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs p-3 rounded-lg ${message.sender === 'user' 
                      ? 'bg-primary-blue text-white' 
                      : 'bg-gray-200 text-gray-800'}`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat Input */}
            <div className="p-3 border-t border-gray-200 bg-white flex">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-blue"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary-blue text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                aria-label="Send message"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowChatbot(true)}
            className="bg-primary-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            aria-label="Open chatbot"
          >
            <MessageCircle size={24} />
          </button>
        )}
      </div>
    </>
  );
};

export default Home;