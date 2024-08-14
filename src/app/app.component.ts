import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MeterGroupModule } from 'primeng/metergroup';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenubarModule, AvatarModule, BreadcrumbModule, MeterGroupModule, CardModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'independence78';
  public marqueeImages = [
    { src: 'https://res.cloudinary.com/nithinmanda/image/upload/v1723298290/independence_ibnxfm.avif', alt: 'Image 1' },
    { src: 'https://res.cloudinary.com/nithinmanda/image/upload/v1723295411/draupadi-murmu-points-to-climate-change-challenges-indias-g20-presidency_gxs0s7.jpg', alt: 'Image 2' },
    { src: 'https://res.cloudinary.com/nithinmanda/image/upload/v1723201002/welcometoindia_a0xel8.webp', alt: 'Image 3' },
    { src: 'https://res.cloudinary.com/nithinmanda/image/upload/v1723353353/Red-Fort-Old-Delhi-India_p1ehms.jpg', alt: 'Image 1' },
    { src: 'https://res.cloudinary.com/nithinmanda/image/upload/v1723354861/india-5_kw0cpm.png', alt: 'Image 1' },
    { src: 'https://res.cloudinary.com/nithinmanda/image/upload/v1723354708/india-1_pzpk7u.webp', alt: 'Image 3' },
    { src: 'https://res.cloudinary.com/nithinmanda/image/upload/v1723354709/india-4_f5ymsm.jpg', alt: 'Image 4' },
    { src: 'https://res.cloudinary.com/nithinmanda/image/upload/v1723354709/india-2_cxv0eo.webp', alt: 'Image 2' },
  ];
  @ViewChild('marqueeContent') marqueeContent!: ElementRef;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    initFlowbite();

  }

  ngAfterViewInit() {
    const content = this.marqueeContent.nativeElement;
    const scrollWidth = content.scrollWidth;
    content.style.animationDuration = `${scrollWidth / 50}s`;
  }

  public items = [{
    label: 'General Information', items: [
      {
        label: 'President Of India',
        icon: 'pi pi-angle-right',

      },
      {
        label: 'Vice President Of India',
        icon: 'pi pi-angle-right',
      },
      {
        label: 'Prime Minister Of India',
        icon: 'pi pi-angle-right',
      }
    ]
  }, {
    label: 'Profile',
    items: [
      {
        label: 'India at a glance',
        icon: 'pi pi-angle-right',

      },
      {
        label: 'The Polity',
        icon: 'pi pi-angle-right',
      },
      {
        label: 'Demographic Background',
        icon: 'pi pi-angle-right',
      }
    ]
  }, {
    label: 'National Identity Elements',
    items: [
      {
        label: 'National Flag',
        icon: 'pi pi-angle-right',

      },
      {
        label: 'National Anthem',
        icon: 'pi pi-angle-right',
      },
      {
        label: 'National Bird',
        icon: 'pi pi-angle-right',
      },
      {
        label: 'National Calendar',
        icon: 'pi pi-angle-right',
      },
      {
        label: 'National Animal',
        icon: 'pi pi-angle-right',
      }
    ]
  }, { label: 'States/UTs' }, { label: 'Districts' }, { label: 'My India My Pride' }, {
    label: 'Integrated Government Online Directory', items: [
      {
        label: 'Categories',
        icon: 'pi pi-angle-right',

      },
      {
        label: 'Sectors',
        icon: 'pi pi-angle-right',
      },

    ]
  }]

  public breadcrumbItems = [{ label: 'Home' },
  { label: 'Independence Day Celebration' },]

  public meterValue = [
    { color: '#fc1955', value: 45 },
    { color: '#a0bb2e', value: 35 },
    { color: '#565656', value: 20 },
  ];


  public meterValue2 = [
    { color: '#000000', value: 100 },

  ];


  onActiveItemChange(event: any) {

  }
}
