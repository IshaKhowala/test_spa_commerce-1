import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultB2bCheckoutConfig, defaultB2bOccConfig } from "@spartacus/setup";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://jsapps.cy9b5jy919-vivoenerg1-d1-public.model-t.cc.commerce.ondemand.com:8443',
        prefix: '/occ/v2',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD', 'GBP'],
      language: ['en'],
      baseSite: ['powertools-spa'],
      urlParameters: ['baseSite', 'language', 'currency'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  }), provideConfig(defaultB2bOccConfig), provideConfig(defaultB2bCheckoutConfig)]
})
export class SpartacusConfigurationModule { }
