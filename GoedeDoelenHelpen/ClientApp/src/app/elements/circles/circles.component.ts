import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { element } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';

// Parent Component
@Component({
    selector: 'app-circles-generated',
    templateUrl: './circles.component.html',
    styleUrls: ['./circles.component.scss']
})
export class CirclesGeneratorComponent implements AfterViewInit {
    @ViewChild('CircleCanvas') canvasRef: ElementRef;
    pageWidth: number;
    pageHeight: number;
    circleCoordinates: [number, number][] = [];

    // Circle settings
    min_distance = 100;
    min_size = 10;
    max_size = 50;

    ngAfterViewInit() {
      const page: HTMLElement = document.getElementById('content');
      this.pageWidth = page.offsetWidth;
      this.pageHeight = page.offsetHeight + 250;

      const ctx: CanvasRenderingContext2D =
        this.canvasRef.nativeElement.getContext('2d');

      this.generateCircles(ctx);
    }

    // Draw the circles again after a resize
    @HostListener('window:resize', ['$event']) onResize(event: Event) {
      this.ngAfterViewInit();
    }

    // Generate the circles using a random process
    generateCircles(ctx: CanvasRenderingContext2D) {
      ctx.canvas.width = this.pageWidth;
      ctx.canvas.height = this.pageHeight;
      // ctx.scale(2, 2);

      // Draw circles at random points
      ctx.beginPath();
      ctx.fillStyle = '#FFAD4D';
      for (let i = 0 ; i < 50 ; i++) {
        const r = this.min_size + Math.random() * (this.max_size - this.min_size);
        const coordinates = this.getCircleCoordinates();
        this.circleCoordinates.push(coordinates);

        ctx.moveTo(coordinates['0'], coordinates['1']);
        ctx.arc(coordinates['0'], coordinates['1'], r, 0, Math.PI * 2);
      }
      ctx.fill();
    }

    // Get random circle coordinates with a minimum distance from the others
    getCircleCoordinates(): [number, number] {
      const x = Math.random() * this.pageWidth;
      const y = Math.random() * this.pageHeight;
      return [x, y];
    }
}
