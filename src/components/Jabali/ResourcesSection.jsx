import { ExternalLink } from 'lucide-react';
import { VideoCard } from './VideoCard';
import { useTranslation } from 'react-i18next';

export function ResourcesSection() {
  const { t } = useTranslation();

  const youtubeVideos = [
    {
      id: 'cJ_7Vsrd-vQ',
      title: t('recursos.youtube.0.title'),
      description: t('recursos.youtube.0.description'),
      canal: t('recursos.youtube.0.channel'),
    },
    {
      id: 'gC_A3J0LMqc',
      title: t('recursos.youtube.1.title'),
      description: t('recursos.youtube.1.description'),
      canal: t('recursos.youtube.1.channel'),
    },
    {
      id: '78A4Ts63J3I',
      title: t('recursos.youtube.2.title'),
      description: t('recursos.youtube.2.description'),
      canal: t('recursos.youtube.2.channel'),
    },
    {
      id: 'GOO8S73qIDE',
      title: t('recursos.youtube.3.title'),
      description: t('recursos.youtube.3.description'),
      canal: t('recursos.youtube.3.channel'),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {t('recursos.titulo')}
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {youtubeVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>

        {/* Recursos adicionales */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
            <ExternalLink className="h-6 w-6 mr-2" />
            {t('recursos.enlaces.titulo')}
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-blue-800 mb-3">
                {t('recursos.enlaces.tecnica')}
              </h5>
              <div className="space-y-3">
                {t('recursos.enlaces.tecnica_links', { returnObjects: true }).map(({ href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 flex items-center text-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-blue-800 mb-3">
                {t('recursos.enlaces.jabali')}
              </h5>
              <div className="space-y-3">
                {t('recursos.enlaces.jabali_links', { returnObjects: true }).map(({ href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 flex items-center text-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h4 className="text-xl font-semibold mb-4">{t('recursos.contacto.titulo')}</h4>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">{t('recursos.contacto.descripcion')}</p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="text-sm text-black">{t('recursos.contacto.telefono')}</span>
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="text-sm text-black">{t('recursos.contacto.email_label')}</span>
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="text-sm text-black">{t('recursos.contacto.email')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
