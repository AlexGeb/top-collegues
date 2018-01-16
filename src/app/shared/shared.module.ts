import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from './pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsOnlineComponent } from '../is-online/is-online.component';
@NgModule({
  imports: [CommonModule, PipeModule, FormsModule, ReactiveFormsModule],
  declarations: [IsOnlineComponent],
  exports: [PipeModule, FormsModule, IsOnlineComponent, ReactiveFormsModule]
})
export class SharedModule {}
