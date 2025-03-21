import React from 'react';
import { Calendar, Clock, Scissors, Smartphone, Star, Users, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Berber Randevu Sisteminizi Dijitalleştirin</h1>
            <p className="text-xl md:text-2xl mb-8">Müşterilerinize modern ve kolay randevu deneyimi sunun</p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
              Hemen Başlayın
            </button>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Neden BerberRandevu?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-red-600" />}
              title="7/24 Online Randevu"
              description="Müşterileriniz istedikleri zaman randevu alabilir"
            />

            <FeatureCard
              icon={<Smartphone className="w-12 h-12 text-red-600" />}
              title="Mobil Uyumlu"
              description="Tüm cihazlarda kusursuz çalışan arayüz"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-red-600" />}
              title="Müşteri Yönetimi"
              description="Müşteri bilgilerini ve geçmiş randevuları kolayca takip edin"
            />
          </div>
        </div>
      </div>

      {/* Nasıl Çalışır */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Randevu Alma Süreci</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StepCard
              number="1"
              title="Berber Seçimi"
              description="Müşteriler konumlarına yakın berberi seçer"
            />
            <StepCard
              number="2"
              title="Tarih ve Saat"
              description="Uygun tarih ve saati belirler"
            />
            <StepCard
              number="3"
              title="Hizmet Seçimi"
              description="İstediği hizmeti seçer"
            />
            <StepCard
              number="4"
              title="Onay"
              description="Randevu anında onaylanır"
            />
          </div>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <StatCard number="1000+" text="Aktif Berber" />
            <StatCard number="50000+" text="Aylık Randevu" />
            <StatCard number="4.9" text="Müşteri Memnuniyeti" icon={<Star className="w-6 h-6 inline" />} />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">Siz de Dijital Dönüşüme Katılın</h2>
          <p className="text-xl text-gray-600 mb-8">
            Berberinizi dijitalleştirin, müşterilerinize modern bir deneyim sunun
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
            Ücretsiz Deneyin
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, text, icon = null }) {
  return (
    <div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-xl">
        {text}
        {icon && <span className="ml-2">{icon}</span>}
      </div>
    </div>
  );
}

export default App;