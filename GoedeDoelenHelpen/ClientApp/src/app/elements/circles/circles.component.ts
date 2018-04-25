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
    styleUrls: ['./circles.component.css']
})
export class CirclesGeneratorComponent implements AfterViewInit {
    @ViewChild('CircleCanvas') canvasRef: ElementRef;
    pageWidth: number;
    pageHeight: number;
    circleCoordinates: Array<[number, number]> = [];

    // Circle settings
    min_distance = 100;
    min_size = 10;
    max_size = 50;

    ngAfterViewInit() {
      const page: HTMLElement = document.getElementById('content');
      this.pageWidth = page.offsetWidth;
      this.pageHeight = page.offsetHeight;

      const ctx: CanvasRenderingContext2D =
        this.canvasRef.nativeElement.getContext('2d');

      this.generateCircles(ctx);
    }

    // Draw the circles again after a resize
    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.ngAfterViewInit();
    }

    // Generate the circles using a semi-random process
    generateImprovedCircles(ctx: CanvasRenderingContext2D) {
      // TODO
    }

    // Generate the circles using a random process
    generateCircles(ctx: CanvasRenderingContext2D) {
      ctx.canvas.width = this.pageWidth;
      ctx.canvas.height = this.pageHeight;
      // ctx.scale(2, 2);

      // Draw circles at random points with a minimum distance
      ctx.beginPath();
      ctx.fillStyle = 'rgb(249, 168, 74)';
      for (let i = 0 ; i < 30 ; i++) {
        const r = this.min_size + Math.random() * (this.max_size - this.min_size);
        const coordinates = this.getCircleCoordinates(0);
        this.circleCoordinates.push(coordinates);

        ctx.moveTo(coordinates['0'], coordinates['1']);
        ctx.arc(coordinates['0'], coordinates['1'], r, 0, Math.PI * 2);
      }
      ctx.fill();
    }

    // Get random circle coordinates with a minimum distance from the others
    getCircleCoordinates(timesRan: number): [number, number] {
      if (timesRan > 10) {
        throw Error('Infinite loop or can\'t find fitting coordinates');
      }

      const x = Math.random() * this.pageWidth;
      const y = Math.random() * this.pageHeight;
      if (this.distanceToCircles(x, y) === true) {
        return [x, y];
      }
      return this.getCircleCoordinates(timesRan + 1);
    }

    distanceToCircles(x: number, y: number): boolean {
      let result = true;
      const offset = this.max_size + this.min_distance;

      this.circleCoordinates.forEach(coordinate => {
        const diffX = coordinate['0'] - x;
        const diffY = coordinate['1'] - y;

        if (
          (diffX < offset || diffX > offset) ||
          (diffY < offset || diffY > offset) &&
          result === true
        ) {
          result = true;
        } else {
          result = false;
        }
      });

      return result;
    }
}
