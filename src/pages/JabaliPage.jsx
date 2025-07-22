import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectSection } from '../components/Jabali/ProjectSection';
import { TechnologySection } from '../components/Jabali/TechnologySection';
import { ImpactSection } from '../components/Jabali/ImpactSection';
import { ResourcesSection } from '../components/Jabali/ResourcesSection';
import { Header } from '../components/Jabali/Header';
import { Navigation } from '../components/Jabali/Navigation';
import { Final } from '../components/Jabali/Final';

export function JabaliPage() {
  const { i18n, t } = useTranslation(); // Agregamos 't' para forzar suscripción
  const [activeTab, setActiveTab] = useState('proyecto');
  const [forceRender, setForceRender] = useState(0);

  // Forzar re-render cuando cambia el idioma
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setForceRender(prev => prev + 1); // Incrementar para forzar re-render
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'proyecto':
        return <ProjectSection />;
      case 'tecnologia':
        return <TechnologySection />;
      case 'impacto':
        return <ImpactSection />;
      case 'recursos':
        return <ResourcesSection />;
      default:
        return <ProjectSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50" key={forceRender}>
      <Header />
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveTab()}
      </main>

      <Final />
    </div>
  );
}