import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';
import { TestChild1Component } from './test-child1/test-child1.component';
import { FormsModule } from '@angular/forms';
import { TestChild2Component } from './test-child2/test-child2.component';


@NgModule({
  declarations: [TestDashboardComponent, TestChild1Component, TestChild2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TestDashboardComponent]
})
export class TestModuleModule { }
