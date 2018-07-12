import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JHipsterSampleGatewayBlogModule as JHipsterSampleMicroserviceBlogModule } from './JHipsterSampleMicroservice/blog/blog.module';
import { JHipsterSampleGatewayEntryModule as JHipsterSampleMicroserviceEntryModule } from './JHipsterSampleMicroservice/entry/entry.module';
import { JHipsterSampleGatewayTagModule as JHipsterSampleMicroserviceTagModule } from './JHipsterSampleMicroservice/tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JHipsterSampleMicroserviceBlogModule,
        JHipsterSampleMicroserviceEntryModule,
        JHipsterSampleMicroserviceTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterSampleGatewayEntityModule {}
