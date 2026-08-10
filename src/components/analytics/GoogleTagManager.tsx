import Script from 'next/script'
import AnalyticsEventBridge from '@/components/analytics/AnalyticsEventBridge'
import ConsentModeSync from '@/components/analytics/ConsentModeSync'
import { CONSENT_KEY } from '@/lib/cookies/consent'
import { siteConfig } from '@/lib/site'

export default function GoogleTagManager() {
  const gtmId = siteConfig.gtmId
  if (!/^GTM-[A-Z0-9]+$/.test(gtmId)) return null

  const bootstrap = `
window.dataLayer=window.dataLayer||[];
window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
window.gtag('consent','default',{
  analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',
  functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500
});
try{
  var saved=JSON.parse(localStorage.getItem(${JSON.stringify(CONSENT_KEY)})||'null');
  if(saved&&saved.savedAt&&Date.now()-new Date(saved.savedAt).getTime()<=15552000000){
    window.gtag('consent','update',{
      analytics_storage:saved.analytics?'granted':'denied',ad_storage:saved.marketing?'granted':'denied',
      ad_user_data:saved.marketing?'granted':'denied',ad_personalization:saved.marketing?'granted':'denied',
      functionality_storage:saved.preferences?'granted':'denied',personalization_storage:saved.preferences?'granted':'denied',
      security_storage:'granted'
    });
  }
}catch(e){}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`

  return (
    <>
      <Script id="bionics-google-tag-manager" strategy="afterInteractive">
        {bootstrap}
      </Script>
      <ConsentModeSync />
      <AnalyticsEventBridge />
    </>
  )
}

