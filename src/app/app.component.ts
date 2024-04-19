import { Component, ViewEncapsulation } from '@angular/core';
import { imageIcon, SVGIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'my-app',
  styles: [
    `
            .k-calendar .k-calendar-view.k-calendar-monthview .k-content .k-calendar-td.k-range-mid .k-link {
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                color: hotpink;
                background-color: green;
            }

        `,
  ],
  template: `
        <div class="visit-demo card-container">
            <div class="k-card custom-card">
                <div class="card-row">
                    <div class="card-column">
                        <h4 class="k-h4">Reservation Dates</h4>
                        <div class="component-container">
                            <kendo-daterange>
                                <kendo-floatinglabel text="Check-in">
                                    <kendo-dateinput kendoDateRangeStartInput [(value)]="range.start"></kendo-dateinput>
                                </kendo-floatinglabel>
                                <kendo-floatinglabel text="Check-out">
                                    <kendo-dateinput kendoDateRangeEndInput [(value)]="range.end"></kendo-dateinput>
                                </kendo-floatinglabel>
                            </kendo-daterange>
                        </div>
                        <div class="skeleton-container top">
                            <div class="k-skeleton skeleton-box-small"></div>
                            <div class="k-skeleton skeleton-box-large"></div>
                        </div>
                        <div class="skeleton-container bottom">
                            <div class="k-skeleton skeleton-box-medium"></div>
                            <div class="k-skeleton skeleton-box-medium"></div>
                        </div>
                    </div>
                    <div class="card-column image-container">
                        <div class="k-skeleton skeleton-image">
                            <kendo-svgicon size="xxxlarge" [icon]="imageSVG"></kendo-svgicon>
                        </div>
                    </div>
                </div>
                <div class="card-row">
                    <div class="k-skeleton skeleton-box-half"></div>
                </div>
            </div>
        </div>
    `,
  encapsulation: ViewEncapsulation.None, // Encapsulation is disabled for demo purposes only.
})
export class AppComponent {
  public range = { start: null, end: null };
  public imageSVG: SVGIcon = imageIcon;
}
