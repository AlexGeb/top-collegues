import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorePipe } from '../pipe/score.pipe';
import { FilterByPseudoPipe } from '../pipe/filter-by-pseudo.pipe';
import { ActionPipe } from '../pipe/action.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ScorePipe, FilterByPseudoPipe, ActionPipe],
  exports: [ScorePipe, FilterByPseudoPipe, ActionPipe]
})
export class PipeModule {}
