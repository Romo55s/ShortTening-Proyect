import { Component, OnInit } from '@angular/core';
import { ShortenService } from '../../shared/short-link.service';

interface ShortenedLink {
  originalUrl: string;
  shortLink: string;
  isCopied: boolean;
}

@Component({
  selector: 'app-home-shorter-bar',
  templateUrl: './home-shorter-bar.component.html',
  styleUrls: ['./home-shorter-bar.component.scss']
})
export class HomeShorterBarComponent implements OnInit {
  url: string = "";
  shortenedLinks: ShortenedLink[] = [];
  isInputEmpty: boolean = false;

  constructor(private shortenService: ShortenService) { }

  ngOnInit() {
    
    const storedLinks = localStorage.getItem('shortenedLinks');
    if (storedLinks) {
      this.shortenedLinks = JSON.parse(storedLinks);
    }
  }

  shortenUrl() {
    this.shortenService.shortenUrl(this.url).subscribe(response => {
      const shortLink = response.result.short_link;
      const shortenedLink: ShortenedLink = {
        originalUrl: this.url,
        shortLink: shortLink,
        isCopied: false
      };
      this.shortenedLinks.push(shortenedLink);
      this.url = "";
      this.saveLinksToLocalStorage();
    });
  }

  copyLink(link: ShortenedLink) {
    const el = document.createElement('textarea');
    el.value = link.shortLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    link.isCopied = true;

    setTimeout(() => {
      link.isCopied = false;
    }, 2000);

    console.log(`Link copied: ${link.shortLink}`);
  }

  saveLinksToLocalStorage() {
    localStorage.setItem('shortenedLinks', JSON.stringify(this.shortenedLinks));
  }

  validateInput() {
    this.isInputEmpty = this.url.trim() === '';
    if (!this.isInputEmpty) {
      this.shortenUrl();
    }
  }  
}