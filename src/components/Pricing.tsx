import React from 'react';
import { Check, Cpu, Zap, Shield } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Modelo Simple y Transparente
          </h2>
          <p className="text-xl text-gray-600">
            Hardware propio para máxima privacidad, con un servicio impulsado por IA para automatizar tu vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Hardware Card */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-sm p-8 hover:border-techguard-500 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">GeoEntry Hub</h3>
              <Cpu className="h-8 w-8 text-techguard-600" />
            </div>
            <p className="text-gray-500 mb-6">Pago único por el dispositivo central</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-gray-900">$99</span>
              <span className="text-gray-500 font-medium"> USD</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Router Inteligente (ESP32 Gateway)</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Control local sin latencia</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Fácil instalación Plug & Play</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Garantía de hardware de 1 año</span>
              </li>
            </ul>
            <a href="#contact" className="block w-full py-3 px-4 bg-gray-100 text-gray-900 font-semibold text-center rounded-lg hover:bg-gray-200 transition-colors">
              Reservar Hardware
            </a>
          </div>

          {/* Subscription Card */}
          <div className="bg-techguard-900 rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-techguard-500 rounded-full opacity-20 blur-xl"></div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h3 className="text-2xl font-bold text-white">IA Suscripción</h3>
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
            <p className="text-gray-300 mb-6 relative z-10">Automatización predictiva e ilimitada</p>
            <div className="mb-6 relative z-10">
              <span className="text-5xl font-extrabold text-white">$15</span>
              <span className="text-gray-300 font-medium"> /mes</span>
            </div>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center text-gray-200">
                <Check className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Inferencia local ilimitada (Ollama)</span>
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Aprendizaje continuo de rutinas</span>
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Panel Web de Auditoría Transparente</span>
              </li>
              <li className="flex items-center text-gray-200">
                <Check className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span>App Móvil (Geofencing Premium)</span>
              </li>
            </ul>
            <a href="#contact" className="block w-full py-3 px-4 bg-techguard-600 text-white font-semibold text-center rounded-lg hover:bg-techguard-500 transition-colors relative z-10 shadow-lg shadow-techguard-600/30">
              Suscribirse al Servicio
            </a>
          </div>
        </div>

        <div className="mt-12 text-center flex items-center justify-center space-x-2 text-gray-500 text-sm">
          <Shield className="h-4 w-4" />
          <span>No vendemos tus datos. Nuestro negocio es brindarte el mejor servicio.</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
