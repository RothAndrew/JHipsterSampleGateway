import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JHipsterSampleGatewayBlogModule } from './blog/blog.module';
import { JHipsterSampleGatewayEntryModule } from './entry/entry.module';
import { JHipsterSampleGatewayTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JHipsterSampleGatewayBlogModule,
        JHipsterSampleGatewayEntryModule,
        JHipsterSampleGatewayTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterSampleGatewayEntityModule {}
