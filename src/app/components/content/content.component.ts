import { Component, Input, OnInit } from '@angular/core';
import { InteractionsBaseContent } from 'src/app/models/models';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  @Input() contentData: InteractionsBaseContent | any;

  ngOnInit(): void {
    
  }

  _returnHtmlFromRichText(richText: any) {
    if (richText === undefined || richText === null) {
      return '<p>Error</p>';
    }
    return richText;
}

}
