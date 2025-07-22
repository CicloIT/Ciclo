import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div
        className="relative h-96 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-0"
        style={{ backgroundImage: "url('j.jpeg')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-6">
            <h2 className="text-5xl font-bold mb-6">{t('hero.titulo')}</h2>
            <p className="text-xl leading-relaxed">{t('hero.descripcion')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
