import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule } from 'ngx-markdown';
import { FBAuthModule } from '../auth/fbauth.module';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemosRoutingModule } from './demos-routing.module';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { DemosEffects } from './state/demos.effects';
import { demoReducer, demosFeatureKey } from './state/demos.reducer';
import { FirebaseAuthComponent } from './samples/firebase-auth/firebase-auth.component';
import { LogInModule } from '../auth/components/login/login.module';
import { RegisterModule } from '../auth/components/register/register.module';

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    FirebaseAuthComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    DemosRoutingModule,
    FBAuthModule,
    LogInModule,
    RegisterModule,
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    SharedModule,
    StoreModule.forFeature(demosFeatureKey, demoReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [SkillsService],
})
export class DemosModule {}
